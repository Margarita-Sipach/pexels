import axios from 'axios';

export const API = 'https://api.pexels.com/v1/';
export const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';

export const getPhotos = async (page = 1) => {
  const res = await axios.get(`${API}curated?page=${page}`, {
    headers: { Accept: 'application/json', Authorization: API_KEY },
  });
  return await res.data.photos;
};

export const getPhotosById = async (id = '', params = { size: '', orientation: '' }, page = 1) => {
  const res = await axios.get(
    `${API}search?query=${id}&page=${page}${Object.entries(params).reduce(
      (acc, item) => (item[1] ? acc + `&${item[0]}=${item[1].toLowerCase()}` : acc),
      ''
    )}`,
    {
      headers: { Accept: 'application/json', Authorization: API_KEY },
    }
  );
  return await res.data.photos;
};

export const getImageFile = async (url: string) => {
  const res = await axios.get(url, {
    responseType: 'blob',
  });
  return await res.data;
};
