import React from 'react';
//styles
import styles from '../styles/pages/Home.module.scss';
//containers
import PageWrapper from '../components/shared/pageWrapper/PageWrapper';

const Home = () => (
	<PageWrapper title="Home">
		<h1 className="title">Home page</h1>
		<p>
			Aenean massa. Sed lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
			posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Proin viverra, ligula sit amet
			ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In consectetuer
			turpis ut velit. Praesent turpis. Proin viverra, ligula sit amet ultrices semper, ligula arcu
			tristique sapien, a accumsan nisi mauris ac eros. Cras risus ipsum, faucibus ut, ullamcorper
			id, varius ac, leo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis arcu
			tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
		</p>
		<p>
			Aenean massa. Sed lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
			posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Proin viverra, ligula sit amet
			ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In consectetuer
			turpis ut velit. Praesent turpis. Proin viverra, ligula sit amet ultrices semper, ligula arcu
			tristique sapien, a accumsan nisi mauris ac eros. Cras risus ipsum, faucibus ut, ullamcorper
			id, varius ac, leo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis arcu
			tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
		</p>
	</PageWrapper>
);

export default Home;
