const color = {
	withe: "",
	black: "",
	gray: "",
	hovergray: "",
	green: "",
	apricot: "",
	lightgray: "",
};

const line = {
	gray: "",
};

const size = {
	laptopS: "",
	mobileS: "",
	tabletS: "",
	laptopXs: "",
	tabletL: "",
	laptop: "",
	desktop: "",
	desktopL: "",
    mobileL: "",
    tablet: "",
};

export const theme = {
	color,
	line,
	mobileS: `(max-width: ${size.mobileS})`,
	laptopXs: `(max-width: ${size.laptopXs})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopS: `(max-width: ${size.laptopS})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};