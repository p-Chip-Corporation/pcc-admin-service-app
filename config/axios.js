const axios = require("axios");

const apiClient = axios.create({
  baseURL: process.env.PCC_CLOUD_SERVICE_BASE_URL, // fallback for development
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

module.exports = apiClient;
