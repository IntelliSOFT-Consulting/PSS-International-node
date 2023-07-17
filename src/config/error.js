export const throwError = (code, message) => {
  throw new Error(JSON.stringify(JSON.stringify({ code, message })));
};

export const parseError = error => {
    console.log(JSON.parse(error));
  return JSON.parse(error);
};
