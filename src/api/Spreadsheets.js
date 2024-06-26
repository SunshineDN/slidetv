import axios from 'axios';

// const URL = 'https://compos.net.br/backend/spreadsheet';
const URL = 'https://compos.aiatende.com.br/spreadsheet';
// const URL = import.meta.env.API_URL_MEDIA || 'http://localhost:3000/spreadsheet';

export const getNotices = async () => {
  const { data } = await axios.get(`${URL}/getNotices`);
  return data;
};

export const getStatistics = async () => {
  const { data } = await axios.get(`${URL}/getStatistics`);
  return data;
};
