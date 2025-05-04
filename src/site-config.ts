export const siteConfig = {
  author: 'Mohamed Emad (Hulxv)',
  title: 'hulxv',
  // subtitle: 'Vitesse theme for Astro, supports Vue and UnoCSS.',
  description: 'the Official blog of Hulxv, the greatest software developer in his home.',
  image: {
    src: '/hero.optimized.gif',
    alt: 'Website Main Image',
  },
  email: 'hulxxv@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/hulxv',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },

    {
      text: 'Linkedin',
      href: 'https://linkedin.com/in/hulxv',
      icon: 'i-simple-icons-linkedin',
    },

  ],
  header: {
    logo: {
      src: '/logo.png',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      // {
      //   text: 'Talks',
      //   href: '/blog/talks',
      // },
    ],
  },
  footer: {
    navLinks: [
      // {
      //   text: 'Posts Props',
      //   href: '/posts-props',
      // },
      // {
      //   text: 'Markdown Style',
      //   href: '/md-style',
      // },
      // {
      //   text: 'View on Astro',
      //   href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      // },
      // {
      //   text: 'GitHub Repository',
      //   href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      // },
    ],
  },
}

export default siteConfig
