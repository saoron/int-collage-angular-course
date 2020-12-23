/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  let numbersCrunched = 0;
  for (let i = 0; i < Math.pow(100000000, 5); i++) {
    numbersCrunched++;
  }
  postMessage(numbersCrunched);
});
