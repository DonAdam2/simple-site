import React from 'react';
import Link from 'next/link';
//styles
import styles from './AppHeader.module.scss';
//constants
import { getAboutPageUrl, getHomePageUrl, getNinjasPageUrl } from '../../constants/AppUrls';

const AppHeader = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logo}>Ninja List</div>
				<div>
					<Link href={getHomePageUrl()}>
						<a>Home</a>
					</Link>
					<Link href={getAboutPageUrl()}>
						<a>About</a>
					</Link>
					<Link href={getNinjasPageUrl()}>
						<a>Ninja Listing</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default AppHeader;
