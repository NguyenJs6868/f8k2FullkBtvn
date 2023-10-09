/** @format */

//Build Http Client
import { config } from "./config.js";
const { SERVER_API } = config;
// const SERVER_API = `https://qn7kjz-8080.csb.app`;

//Get các task từ url
export const getTasks = async () => {
  const response = await fetch(`${SERVER_API}/customers`);
  const data = await response.json();
  console.log(data);
  return data;
};

// getTasks();

export const client = {
  send: async (url, method = "GET", body = null) => {
    url = SERVER_API + url;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    const data = await response.json();

    return { response, data };
  },

  get: function (url) {
    return this.send(url);
  },

  post: function (url, body) {
    return this.send(url, "POST", body);
  },

  put: function (url, body) {
    return this.send(url, "PUT", body);
  },

  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },

  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
