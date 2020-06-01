import axios from 'axios';
import { config } from 'utils/Constants';

export async function get(url, params) {
  const endpointUrl = config.apiUrl + url;
  let response = {};

  try {
    const res = await axios.get(endpointUrl, { params });

    if (res.status !== 200 || res?.data?.error) {
      response = { error: 'There was a problem with the server' };
    } else {
      response = res?.data?.data ? res.data.data : res;
    }
  } catch (err) {
    response = { error: 'There was a problem with the server' };
  }

  return response;
}

export async function send(url, params) {
  const endpointUrl = config.apiUrl + url;
  let response = {};

  try {
    const res = await axios.get(endpointUrl, { params });

    if (res.status !== 200) {
      response = { error: 'There was a problem with the server' };
    } else if (res?.data?.error) {
      response = { error: res.data.error };
    } else {
      response = res?.data?.data ? res.data.data : res;
    }
  } catch (err) {
    response = { error: 'There was a problem with the server' };
  }

  return response;
}
