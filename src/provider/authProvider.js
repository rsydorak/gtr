import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';
import {
  getHeaders,
  clearTokens as defaultClearTokens,
  saveTokens as defaultSaveTokens,
  hasTokens as defaultHasTokens,
} from '../utils';

export const authLogin = async (url, params, saveTokens, loginErrorMessage) => {
  const request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: getHeaders(),
  });

  const response = await fetch(request);

  if (response.status === 401 || response.status === 403) {
    // eslint-disable-next-line no-throw-literal
    throw new Error(loginErrorMessage);
  }
  if (response.status < 200 || response.status >= 300) {
    throw response.statusText;
  }

  const data = await response.json();
  saveTokens(data);
};

const fetchPermissions = async (url, clearTokens) => {
  const request = new Request(url, {
    method: 'GET',
    headers: getHeaders(true),
  });

  const response = await fetch(request);
  if (response.status < 200 || response.status >= 300) {
    clearTokens();
    throw new Error(response.statusText);
  }
  const permissions = await response.json();
  localStorage.setItem('permissions', JSON.stringify(permissions));
};

export default (
  { authorizationUrl, permissionsUrl },
  { saveTokens = defaultSaveTokens, clearTokens = defaultClearTokens, hasTokens = defaultHasTokens, getPermissions },
  loginErrorMessage,
) => async (type, params) => {
  switch (type) {
    case AUTH_LOGIN: {
      await authLogin(authorizationUrl, params, saveTokens, loginErrorMessage);
      if (permissionsUrl) await fetchPermissions(permissionsUrl, clearTokens);
      return;
    }
    case AUTH_LOGOUT: {
      clearTokens();
      return;
    }

    case AUTH_ERROR: {
      return;
    }

    case AUTH_CHECK: {
      if (hasTokens()) return;
      // eslint-disable-next-line no-throw-literal
      throw null;
    }

    case AUTH_GET_PERMISSIONS: {
      return getPermissions();
    }

    default:
      // eslint-disable-next-line no-throw-literal
      throw new Error('Unknown method');
  }
};
