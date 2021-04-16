import { CONFIG } from "../constants/config";

const api = {
  get: async (endpoint, data) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.authToken,
      },
    };

    return fetch(`${CONFIG.api_base_url + endpoint}`, requestOptions)
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => error);
  },

  post: async (endpoint, body) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    return fetch(`${CONFIG.api_base_url + endpoint}`, requestOptions)
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => error);
  },

  put: async (endpoint, body) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + body.authToken,
      },
      body: JSON.stringify(body.content),
    };
    return fetch(`${CONFIG.api_base_url + endpoint}`, requestOptions)
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => error);
  },
};

export default api;
