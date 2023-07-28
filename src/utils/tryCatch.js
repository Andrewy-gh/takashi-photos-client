export const tryCatch = async (func, errHandler) => {
  try {
    await func();
  } catch (error) {
    errHandler(error);
  }
};
