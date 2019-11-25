import { fetchUtils, HttpError } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import fakeDataProvider from 'ra-data-fakerest';
import { getHeaders, reauthenticateIfNeeded } from '../utils';

const fetchWrapper = async (...params) => {
  const result = await fetch(...params);

  const { status } = result;

  if (status < 200 || status >= 300) {
    const { body, statusText } = result;

    throw new HttpError(body || statusText, status, body);
  }

  return result;
};

export const httpClient = ({ apiAuthUrl, permissionsUrl, clearTokens, saveTokens }) => async (
  url,
  options = {},
  fetchJson = true,
) => {
  const fetchMethod = fetchJson ? fetchUtils.fetchJson : fetchWrapper;

  try {
    const result = await fetchMethod(url, {
      ...options,
      headers: getHeaders(true),
    });

    return result;
  } catch (e) {
    if (
      e.name === 'Error' &&
      (await reauthenticateIfNeeded(
        { apiAuthUrl, permissionsUrl },
        e.status,
        { clearTokensData: clearTokens, saveTokensData: saveTokens }
      ))
    ) {
      return fetchMethod(url, { ...options, headers: getHeaders(true) });
    }
    throw e;
  }
};

export default ({ fakeData = {}, apiBaseUrl, apiAuthUrl, permissionsUrl, clearTokens, saveTokens }) => {
  const dataProvider = jsonServerProvider(
    apiBaseUrl,
    httpClient({ apiAuthUrl, permissionsUrl, clearTokens, saveTokens }),
  );
  const providerWithFakeData = fakeDataProvider(fakeData);

  return (type, resource, params) => {
    if (fakeData[resource]) {
      return providerWithFakeData(type, resource, params);
    }
    return dataProvider(type, resource, params, apiAuthUrl);
  };
};
