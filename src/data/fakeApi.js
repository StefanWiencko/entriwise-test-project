const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export const fakeApi = async (dataset, delay) => {
  try {
    const res = dataset;
    await sleep(delay);
    return await res;
  } catch (err) {
    throw new Error("Something went wrong while fetching data");
  }
};
