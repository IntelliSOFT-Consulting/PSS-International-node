import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { DHIS2_USERNAME, DHIS2_PASSWORD, DHIS2_BASE_URL } = process.env;

const authBase64 = Buffer.from(`${DHIS2_USERNAME}:${DHIS2_PASSWORD}`).toString(
  'base64'
);

const api = axios.create({
  baseURL: DHIS2_BASE_URL,
  headers: {
    Authorization: `Basic ${authBase64}`,
    'Content-Type': 'application/json',
  },
});

export default api;
