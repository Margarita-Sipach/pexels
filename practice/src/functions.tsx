export const getRandomNumber = (min: number, max: number) => {
  return Math.trunc(Math.random() * (max - min) + min);
};
