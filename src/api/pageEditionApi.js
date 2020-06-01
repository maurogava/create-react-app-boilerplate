import { get, send } from 'api/fetch';

export const getUrls = params => get('/v5/api/seopagesapi/single/get/all', params);

export const getUrl = params => get(`/v5/api/seopagesapi/single/get/${params.id}`, params);

export const editUrl = params => send(`/v5/api/seopagesapi/single/edit/${params.id}`, params);
