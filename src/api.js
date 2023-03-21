import axios from "axios";

const api = axios.create({
  baseURL: "https://api.punkapi.com/v2",
});

export const getAllBeers = (page = 1) => {
  return api.get(`beers?per_page=10&page=${page}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
