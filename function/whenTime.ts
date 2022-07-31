export const whenTime = (date) => {
	const today = new Date();
	const times = new Date(date);

	const Timevalue = Math.floor((today.getTime() - times.getTime()) / 1000 / 60);
	if (Timevalue < 5) {
		return "방금 전";
	}
	if (Timevalue < 60) {
		return `${Timevalue}분 전`;
	}
	const betweenTimeHour = Math.floor(Timevalue / 60);
	if (betweenTimeHour < 24) {
		return `${betweenTimeHour}시간 전`;
	}
	const betweenTimeDay = Math.floor(Timevalue / 60 / 24);
	if (betweenTimeDay < 365) {
		return `${betweenTimeDay}일 전`;
	}
	return `${Math.floor(betweenTimeDay / 365)}년 전`;
};
