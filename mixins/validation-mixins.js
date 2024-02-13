export const isString = (data) => typeof data === "string";
export const isEmpty = (data) => !data.trim();
export const isMaxLength = (data, numberCharacters) => data.length < numberCharacters;
export const isUrl = (data) => {
	if (!isEmpty(data)) {
		try {
			new URL(data);

			return true;
		} catch {
			return false;
		}
	}

	return true;
};
