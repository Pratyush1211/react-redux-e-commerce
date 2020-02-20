export const getFromStorage = (key: string, defaultValue: string) =>
  JSON.parse(localStorage.getItem(key) || defaultValue);

export const setToStorage = <ValueType>(key: string, value: ValueType) =>
  localStorage.setItem(key, JSON.stringify(value));

export const cachedStorage = <T>(key: string, defaultValue: string) => {
  let data: T = getFromStorage(key, defaultValue);
  const handleSetToStorage = (value: T) => {
    data = value;
    setToStorage<T>(key, value);
  };
  const handleGetFromStorage = (): T => {
    if (data) {
      return data;
    }
    data = getFromStorage(key, defaultValue);
    return data;
  };
  return {
    get: handleGetFromStorage,
    set: handleSetToStorage,
  };
};
