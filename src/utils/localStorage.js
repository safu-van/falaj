export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("local Storage setItem error :", error);
  }
};

export const getItem = (key) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    console.log("local Storage getItem error :", error);
  }
};

