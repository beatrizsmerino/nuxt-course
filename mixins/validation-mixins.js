export const isString = (data) => typeof data === "string";
export const isEmpty = (data) => !data.trim();
export const isMaxLength = (data, numberCharacters) => data.length < numberCharacters;
