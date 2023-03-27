import axios from "axios";

const api = axios.create({
  baseURL: "https://thankful-puce-pike.cyclic.app",
});

export const getAllBeers = () => {
  return api.get(`/recipes`).then((res) => {
    return res.data.recipes;
  });
};

export const getAllHops = () => {
  return api.get(`/hops`).then((res) => {
    return res.data.hops;
  });
};

export const getAllMalts = () => {
  return api.get(`/malts`).then((res) => {
    return res.data.malts;
  });
};
