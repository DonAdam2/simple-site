const HOME = '/',
	ABOUT = '/about',
	NINJAS = '/ninjas';

export const getHomePageUrl = () => HOME;
export const getAboutPageUrl = () => ABOUT;
export const getNinjasPageUrl = () => NINJAS;
export const getNinjasDetailsPageUrl = ({ id }) => `${NINJAS}/${id}`;
