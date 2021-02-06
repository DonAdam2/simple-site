import React from 'react';
import Link from 'next/link';
//styles
import styles from './Ninja.module.scss';
//constants
import { getNinjasDetailsPageUrl } from '../../constants/AppUrls';

const Ninja = ({ name, id }) => (
	<Link href={getNinjasDetailsPageUrl({ id })}>
		<a className={styles.link}>{name}</a>
	</Link>
);

export default Ninja;
