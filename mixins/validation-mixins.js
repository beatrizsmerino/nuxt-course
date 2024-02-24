export const isString = data => typeof data === "string";
export const isNumber = data => !isNaN(Number(data)) && isFinite(Number(data));
export const isEmpty = data => !data.trim();
export const isMaxLength = (data, numberCharacters) => data.length < numberCharacters;
export const isUrl = data => {
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
export const isEmail = (data) => {
	if (isEmpty(data)) {
		return false;
	}

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

	return regex.test(data);
};
export const containsString = (data, substring) => data.includes(substring);
export const containsNumber = data => (/\d/u).test(data);
export const containsSpecialChar = data => (/[!@#$%^&*(),.?":{}|<>]/u).test(data);
export const containsUpperCase = data => (/[A-Z]/u).test(data);
export const containsLowerCase = data => (/[a-z]/u).test(data);

export function validateFieldMaxLength(fieldValue, maxLength) {
	if (!isMaxLength(fieldValue, maxLength)) {
		return `This field cannot exceed ${maxLength} characters`;
	}

	return "";
}

export function validateFieldMinLength(fieldValue, minLength) {
	if (isMaxLength(fieldValue, minLength)) {
		return `This field needs more than ${minLength} characters`;
	}

	return "";
}

export function validateFieldUrl(fieldValue) {
	if (!isUrl(fieldValue)) {
		return "This field must be a url";
	}

	return "";
}

export function validateFieldEmail(fieldValue) {
	if (!isEmail(fieldValue)) {
		return "This field must be a email";
	}

	return "";
}

export function validateFieldString(fieldValue) {
	if (!isString(fieldValue)) {
		return "This field must be a string";
	}

	return "";
}

export function validateFieldNumber(fieldValue) {
	if (!isNumber(fieldValue)) {
		return "This field must be a number";
	}

	return "";
}

export function validateFieldContainsString(fieldValue, stringToNotContain) {
	if (containsString(fieldValue, stringToNotContain)) {
		return `The password must not contain the string "${stringToNotContain}"`;
	}

	return "";
}

export function validateFieldContainsNumber(fieldValue) {
	if (!containsNumber(fieldValue)) {
		return "The password must contain at least one number";
	}

	return "";
}

export function validateFieldContainsSpecialChar(fieldValue) {
	if (!containsSpecialChar(fieldValue)) {
		return "The password must contain at least one special character";
	}

	return "";
}

export function validateFieldContainsUpperCase(fieldValue) {
	if (!containsUpperCase(fieldValue)) {
		return "The password must contain at least one uppercase letter";
	}

	return "";
}

export function validateFieldContainsLowerCase(fieldValue) {
	if (!containsLowerCase(fieldValue)) {
		return "The password must contain at least one lowercase letter";
	}

	return "";
}

export function validateFieldRequired(fieldValue) {
	if (isEmpty(fieldValue)) {
		return "This field is required";
	}

	return "";
}
