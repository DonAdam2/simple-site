import React from 'react';
//styles
import styles from '../styles/pages/404.module.scss';
//components
import PageWrapper from '../components/shared/pageWrapper/PageWrapper';

const NotFound = () => {
	return (
		<PageWrapper title="Not Found">
			<div className={`container ${styles.notFound}`}>
				<div className="row">
					<div className="col-sm-2">
						<i className="fa fa-times" />
					</div>
					<div className="col-sm-8 text-center">
						<h1 className={styles.title}>
							<span className={styles.notFoundCode}>404</span> <span className="error">error</span>
						</h1>
						<h3>Page not found!</h3>
						<p className={styles.paragraph}>
							We are sorry but the page you are looking for doesn't exist or has been moved. Please
							check back later or use our navigation menu
						</p>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default NotFound;
