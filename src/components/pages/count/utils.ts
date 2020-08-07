import { IPercentage, IFood } from "../../../interfaces";

export const keyToName = (key: string) => {
  let str = key[0].toUpperCase();

  for (let i = 1; i < key.length; i++) {
    const charCode = key[i].charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      str += " ";
    }
    str += key[i];
  }

  return str;
};

export const getPercentages = (foods: IFood[]) => {
  const totals = {
    grains: 0,
    wholeGrains: 0,
    vegetables: 0,
    orangeVegetables: 0,
    drkgreenVegetables: 0,
    starchyvegetables: 0,
    otherVegetables: 0,
    fruits: 0,
    milk: 0,
    meats: 0,
    soy: 0,
    drybeansPeas: 0,
    oils: 0,
    solidFats: 0,
    addedSugars: 0,
    alcohol: 0,
    saturatedFats: 0,
  };

  let sumTotal = 0;
  for (let i = 0; i < foods.length; i++) {
    const keys = Object.keys(totals);
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      // @ts-ignore
      totals[key] += foods[i][key];
      // @ts-ignore
      sumTotal += foods[i][key];
    }
  }

  const percentages: IPercentage[] = Object.keys(totals)
    .map((key: string) => {
      return {
        name: keyToName(key),
        // @ts-ignore
        value: (totals[key] / sumTotal) * 100,
      };
    })
    .filter((percentage) => !!percentage.value);

  return percentages;
};
