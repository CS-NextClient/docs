import type { ThemeConfig } from '@docusaurus/preset-classic';

const discordHtml = `
	<svg class="external-link">
		<use xlink:href="/img/logo-discord.svg#main" />
	</svg>
	<span>Наш Discord</span>
`

const vkHtml = `
	<svg class="external-link">
		<use xlink:href="/img/logo-vk.svg#main" />
	</svg>
	<span>Группа VK</span>
`

const siteHtml = `
	<svg class="external-link">
		<use xlink:href="/img/logo-site.svg#main" />
	</svg>
	<span>NextClient</span>
`

export const navbarThemeConfig: ThemeConfig['navbar'] = {
	title: 'NEXTCLIENT',
	logo: {
		alt: 'NextClient Logo',
		src: 'img/n21.svg',
		srcDark: 'img/n21-dark.svg',
	},
	items: [
		{
			type: 'docSidebar',
			sidebarId: 'tutorialSidebar',
			position: 'left',
			label: 'Документация',
		}
	],
}