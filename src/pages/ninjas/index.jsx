import React from 'react';
//services
import UsersService from '../../services/UsersService';
//components
import PageWrapper from '../../components/shared/pageWrapper/PageWrapper';
import Ninja from '../../components/ninja/Ninja';

const Index = ({ ninjas }) => {
	return (
		<PageWrapper title="Ninja List">
			<h1 className="title">Ninja list</h1>
			{ninjas.map((el) => (
				<Ninja key={el.id} id={el.id} name={el.name} />
			))}
		</PageWrapper>
	);
};

export const getStaticProps = async () => {
	const res = await UsersService.getUsersList();

	return {
		props: {
			ninjas: res.data,
		},
	};
};

export default Index;
