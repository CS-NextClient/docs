import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from '@theme/Heading';

import styles from './ui/style.module.scss'
import clsx from "clsx";
import Link from "@docusaurus/Link";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className={styles.container}>
			<Heading as="h1" className="hero__title">
				{siteConfig.title}
			</Heading>
			<p className='hero__subtitle desc'>
				{siteConfig.tagline}
			</p>

			<Link to='/docs/category/server-api'>
				<button className="button button--primary button--lg">
					Начать
				</button>
			</Link>

			<div className={clsx(styles.circle, 'left')} />
			<div className={clsx(styles.circle, 'right')} />
		</div>
	);
}

export function PageHome() {
	return (
		<Layout
			title={`Главная`}
			description="Официальная документация NextClient"
		>
			<HomepageHeader />
		</Layout>
	);
}