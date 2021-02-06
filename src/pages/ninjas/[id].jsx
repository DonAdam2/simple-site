import React from 'react';
//components
import PageWrapper from '../../components/shared/pageWrapper/PageWrapper';
import UsersService from '../../services/UsersService';

const NinjaDetails = ({ ninja }) => (
	<PageWrapper title="Ninja Details">
		<h3>{ninja.name}</h3>
		<p>{ninja.email}</p>
		<p>{ninja.website}</p>
		<p>{ninja.address?.city}</p>
	</PageWrapper>
);

export const getStaticPaths = async () => {
	const res = await UsersService.getUsersList(),
		paths = res.data.map((el) => ({ params: { id: el.id.toString() } }));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const res = await UsersService.getUserDetails({ id: params.id });

	return {
		props: {
			ninja: res.data,
		},
	};
};

export default NinjaDetails;
