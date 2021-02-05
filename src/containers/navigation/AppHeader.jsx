import React from 'react';
import Link from 'next/link';
//styles
import styles from './AppHeader.module.scss';
//constants
import { getAboutPageUrl, getHomePageUrl, getNinjasPageUrl } from '../../constants/AppUrls';

const AppHeader = () => {
	return (
		<header>
			<nav>
				<div className="log">
					<h1>Ninja List</h1>
				</div>
				<Link href={getHomePageUrl()}>
					<a>Home</a>
				</Link>
				<Link href={getAboutPageUrl()}>
					<a>About</a>
				</Link>
				<Link href={getNinjasPageUrl()}>
					<a>Ninja Listing</a>
				</Link>
			</nav>
		</header>
	);
};

export default AppHeader;
