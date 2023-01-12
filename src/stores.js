import { readable } from "svelte/store";
import { dataset_1, dataset_2 } from "./data/datasets";
import { fakeApi } from "./data/fakeApi";

export const DataStore = readable({}, async (set) => {
  const res = await fakeApi(dataset_1, 2000);
  //   const res = await fakeApi(dataset_2, 2000);
  set(res);
});
