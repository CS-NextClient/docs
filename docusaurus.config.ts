import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { navbarThemeConfig } from './src/app/config/navbar';
import { footerThemeConfig } from './src/app/config/footer';
import 'dotenv/config'

const config: Config = {
	title: 'NextClient Docs',
	tagline: 'Официальная документация для всех программных средств NextClient',
	favicon: 'img/n21.svg',

	// Set the production url of your site here
	url: process.env.PRODUCTION_URL,
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: process.env.BASE_URL,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: process.env.ORGANIZATION_NAME, // Usually your GitHub org/user name.
	projectName: process.env.PROJECT_NAME, // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'ru',
		locales: ['en', 'ru'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts'
				},
				blog: {
					showReadingTime: true,
				},
				pages: {
					path: './src/app/routes'
				},
				theme: {
					customCss: [
						'./src/shared/assets/styles/main.scss',
					]
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/docusaurus-social-card.jpg',
		navbar: navbarThemeConfig,
		footer: footerThemeConfig,
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			magicComments: [
				{
					className: 'code-block-add-line',
					line: 'highlight-next-line-add',
				},
			]
		},
	} satisfies Preset.ThemeConfig,

	plugins: [
		'docusaurus-plugin-sass'
	]
};

export default config;
