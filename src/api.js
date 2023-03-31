import axios from "axios";

const api = axios.create({
  baseURL: "https://thankful-puce-pike.cyclic.app",
});

export const getAllBeers = () => {
  return api.get(`/recipes`).then((res) => {
    return res.data.recipes;
  });
};

export const getBeer = (id) => {
  return api.get(`/recipes/${id}`).then((res) => {
    return res.data.recipe;
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

export const postBeer = ({
  name,
  abv,
  style,
  description,
  selectedMalts,
  selectedHops,
  yeast,
  mash,
  fermTemp,
  og,
  fg,
  notes,
  batchSize,
  boilVolume,
}) => {
  const formatedHops = [...selectedHops].map((hop) => {
    return {
      name: hop.name,
      amount: { value: Number(hop.weight), unit: "grams" },
      add: hop.time,
    };
  });
  const formatedMalts = [...selectedMalts].map((malt) => {
    return {
      name: malt.name,
      amount: { value: Number(malt.weight), unit: "Kg" },
    };
  });
  const formatedMash = [...mash].map((step) => {
    return {
      temp: { value: Number(step.mashTemp), unit: "Celsius" },
      duration: Number(step.mashTime),
    };
  });

  const newRecipe = {
    name,
    style,
    abv: Number(abv),
    target_og: Number(og),
    target_fg: Number(fg),

    description,
    notes,
    boil_volume: {
      value: Number(boilVolume),
      unit: "liters",
    },
    volume: {
      value: Number(batchSize),
      unit: "liters",
    },
    ingredients: {
      malt: formatedMalts,
      hops: formatedHops,
      yeast,
    },
    method: {
      mash_temp: formatedMash,
      fermentation: { temp: { value: fermTemp, unit: "Celsius" } },
    },
  };

  return api
    .post("/recipes", newRecipe)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
