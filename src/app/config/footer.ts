import type { ThemeConfig } from '@docusaurus/preset-classic';

export const footerThemeConfig: ThemeConfig['footer'] = {
	style: 'dark',
	links: [
		{
			title: 'Ссылки',
			items: [
				{
					label: 'NextClientServerApi',
					to: 'https://github.com/CS-NextClient/NextClientServerApi',
				},
			],
		},
		{
			title: 'Комьюнити',
			items: [
				{
					label: 'Discord',
					href: 'https://discord.next21.ru/',
				},
				{
					label: 'Сайт разработчиков',
					href: 'https://next21.ru/',
				},
			],
		}
	],
	copyright: `© ${new Date().getFullYear()} Next21 Team, сделано на Docusaurus.`,
}