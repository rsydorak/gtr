export const clearTokens = (keyForException = []) => {
  const localStorageKeys = Object.keys(localStorage);

  localStorageKeys.forEach(key => {
    if (keyForException.includes(key)) return;
    delete localStorage[key];
  });
};

export const saveTokens = (data = {}) => {
  const dataKeys = Object.keys(data);

  dataKeys.forEach(key => {
    if (key.toLowerCase().includes('token') && key !== 'refreshToken') {
      localStorage.accessToken = data[key];
      return;
    }
    localStorage[key] = data[key];
  });
};

export const hasTokens = () => !!localStorage.accessToken && !!localStorage.username;

export const getHeaders = authenticated => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  if (authenticated) headers.set('Authorization', `Bearer ${localStorage.accessToken}`);

  return headers;
};

let newTokenRequest;

export const reauthenticateIfNeeded = async (
  { apiAuthUrl, permissionsUrl },
  status,
  { clearTokensData = clearTokens, saveTokensData = saveTokens },
) => {
  if (status !== 401 || !localStorage.accessToken) return false;
  if (newTokenRequest) {
    return newTokenRequest;
  }

  newTokenRequest = new Promise(async resolve => {
    const { refreshToken, accessToken } = localStorage;
    const request = new Request(apiAuthUrl, {
      method: 'PUT',
      body: JSON.stringify({ refreshToken, accessToken }),
      headers: getHeaders(),
    });

    const response = await fetch(request);

    if (response.status < 200 || response.status >= 300) {
      clearTokensData();

      window.location.href = '/#/login';

      resolve(false);
      newTokenRequest = null;
      return;
    }

    const data = await response.json();
    saveTokensData(data);

    if (permissionsUrl) {
      const permissionsRequest = new Request(permissionsUrl, {
        method: 'GET',
        headers: getHeaders(true),
      });
      const permissonsResponse = await fetch(permissionsRequest);

      if (permissonsResponse.status < 200 || permissonsResponse.status >= 300) {
        console.error('Cant get permissions.');
        clearTokensData();

        window.location.href = '/#/login';

        resolve(false);
        newTokenRequest = null;
        return;
      }

      const permissions = await permissonsResponse.json();
      localStorage.setItem('permissions', JSON.stringify(permissions));
    }

    resolve(true);
    newTokenRequest = null;
  });

  return newTokenRequest;
};

export const getValueFromToken = (accessToken, key) => {
  if (accessToken) {
    const parsedToken = JSON.parse(window.atob(accessToken.split('.')[1]));
    return parsedToken[key];
  }
  return null;
};
