import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'GSoC @Metacall',
    projects: [
      {
        text: 'MetaSSR: An SSR framework for ReactJS built on Rust & Metacall',
        description: 'My project is about building an SSR framework for React.js (Like Next.js and Gatspy.js) that is built on Rust using a web framework called "axum.rs" to get a high performance, and using "Metacall" to know how it\'s(Metacall core) good and suitable for real uses. Also, I helped find some bugs in the core and made some benchmarks before starting my project.',
        href: 'https://github.com/metacall/rust-http-ssr',
      },

    ],
  },
  {
    title: 'Open Source Community',
    projects: [
      {
        text: 'vnStat Client',
        description: 'An open-source GUI client for \href{https://humdi.net/vnstat/}{vnstat} (a traffic monitor for GNU/Linux and BSD), and built on ElectronJS & NextJS.',
        href: 'https://github.com/hulxv/vnstat-client',
      },
      {
        text: 'vnStat Server',
        description: 'An open-source tool built to serve your vnStat (a traffic monitor for GNU/Linux and BSD) data using an HTTP connection that able you to share this data between multiple machines, and controlling in vnStat daemon.',
        href: 'https://github.com/hulxv/vnstat-server',
      },
      {
        text: 'Prqlite',
        description: 'An open-source CLI tool built to use SQLite databases with PRQL (Pipelined Relational Query Language).',
        href: 'https://github.com/hulxv/prqlite',
      },
      {
        text: 'Electronic document system',
        description: 'A highly encrypted, minimal document storage system was originally developed as part of a proposal for the Egyptian government to accelerate digitalization efforts further.',
        href: 'https://github.com/Zelakolase/EDS-MOE',
      },
      {
        text: 'Fake Society',
        description: 'A frontend for a social media web application called `Fake Society`, I built it to be training for using Next.js and keeping up with Reactjs component libraries, and How I integrate Restful APIs in real world.',
        href: 'https://github.com/hulxv/fake-society-frontend',
      },
    ],
  },
]
