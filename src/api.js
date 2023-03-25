import axios from "axios";

const api = axios.create({
  baseURL: "https://thankful-puce-pike.cyclic.app",
});

export const getAllBeers = () => {
  return api.get(`/recipes`).then((res) => {
    console.log(res.data.recipes);
    return res.data.recipes;
  });
};

export const getAllHops = () => {
  return api.get(`/hops`).then((res) => {
    console.log(res.data.hops);
    return res.data.hops;
  });
};

export const getAllMalts = () => {
  return api.get(`/malts`).then((res) => {
    console.log(res.data.malts);
    return res.data.malts;
  });
};
