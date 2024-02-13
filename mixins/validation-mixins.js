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

export function validateFieldMaxLength(fieldValue, maxLength) {
	if (!isMaxLength(fieldValue, maxLength)) {
		return `This field cannot exceed ${maxLength} characters`;
	}

	return "";
}

export function validateFieldUrl(fieldValue) {
	if (!isUrl(fieldValue)) {
		return "This field must be a url";
	}

	return "";
}

export function validateFieldString(fieldValue) {
	if (!isString(fieldValue)) {
		return "This field must be a string";
	}

	return "";
}

export function validateFieldRequired(fieldValue) {
	if (isEmpty(fieldValue)) {
		return "This field is required";
	}

	return "";
}
