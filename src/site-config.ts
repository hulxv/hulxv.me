export const siteConfig = {
	author: "Mohamed Emad",
	title: "The Real Hulxv",
	// subtitle: "Vitesse theme for Astro, supports Vue and UnoCSS.",
	description: "the official blog of Hulxv, the greatest software developer in his home.",
	image: {
		src: "/hero.birds.webp",
		alt: "Birds, flying in the sky",
	},
	icon: {
		src: "/logo/favicon.ico",
		alt: "My Bird",
	},
	social: {
		twitter: "realhulxv"
	},
	email: "hulxxv@gmail.com",
	socialLinks: [
		{
			text: "GitHub",
			href: "https://github.com/hulxv",
			icon: "i-simple-icons-github",
			header: "i-ri-github-line",
		},
		{
			text: "Linkedin",
			href: "https://linkedin.com/in/hulxv",
			icon: "i-simple-icons-linkedin",
		},
	],
	header: {
		logo: {
			src: "/logo/android-chrome-512x512.png",
			alt: "Official logo as a Bird",
		},
		navLinks: [
			{
				text: "Blog",
				href: "/blog",
			},
			{
				text: "Projects",
				href: "/projects",
			},
		],
	},
	page: {
		blogLinks: [
			{
				text: "Blog",
				href: "/blog",
			},
			// {
			//   text: "Talks",
			//   href: "/blog/talks",
			// },
		],
	},
	footer: {
		navLinks: [
			{
				text: "Home",
				href: "/",
			},
			{
				text: "Blog",
				href: "/blog",
			},
			{
				text: "Projects",
				href: "/projects",
			},
			{
				text: "Linkedin",
				href: "https://www.linkedin.com/in/hulxv",
			},
			{
				text: "GitHub",
				href: "https://github.com/hulxv",
			},
		],
	},
};

export default siteConfig;
