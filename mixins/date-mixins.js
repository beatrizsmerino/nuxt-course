// eslint-disable-next-line max-statements, complexity
export const getDateFormatted = (date) => {
	const currentDate = new Date(date);
	const year = currentDate.getFullYear();
	let month = currentDate.getMonth() + 1;
	let day = currentDate.getDate();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	day = day < 10 ? `0${day}` : day;
	month = month < 10 ? `0${month}` : month;
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
