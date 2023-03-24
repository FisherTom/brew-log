import axios from "axios";

const api = axios.create({
  baseURL: "https://thankful-puce-pike.cyclic.app",
});

export const getAllBeers = (page = 1) => {
  return api.get(`/recipes`).then((res) => {
    console.log(res.data.recipes);
    return res.data.recipes;
  });
};
