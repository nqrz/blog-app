export const state = () => ({
  counter: 0,
  socials: [
    {
      name: 'nqrz',
      link: 'https://github.com/nqrz',
      img: 'icon/github-light.png',
      imgDark: 'icon/github-dark.png',
      alt: 'Github logo'
    },
    {
      name: '@abaihaaqi',
      link: 'https://twitter.com/abaihaaqi',
      img: '/icon/twitter.svg',
      alt: 'Twitter Logo'
    },
  ],
  contacts: [
    {
      name: 'Email me',
      link: 'mailto:nizarbaihaq@gmail.com',
      img: 'icon/gmail.svg',
      alt: 'Gmail logo'
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/nizar-baihaqi/',
      img: 'icon/linkedin.png',
      alt: 'Linkedin Logo'
    },
  ],
  techStacks: [
    {
      name: 'Nuxtjs',
      link: 'https://nuxtjs.org/',
      img: 'icon/nuxtjs.svg',
      alt: 'Nuxtjs logo'
    },
    {
      name: 'Tailwindcss',
      link: 'https://tailwindcss.com/',
      img: '/icon/tailwindcss.svg',
      alt: 'Tailwindcss Logo'
    },
  ],
  basicSkills: [
    {
      name: 'HTML',
      link: 'https://www.w3schools.com/html/',
      img: 'icon/html.svg',
      alt: 'HTML Logo'
    },
    {
      name: 'CSS',
      link: 'https://www.w3schools.com/Css/',
      img: '/icon/css.svg',
      alt: 'CSS Logo'
    },
    {
      name: 'Javascript',
      link: 'https://www.javascript.com/',
      img: '/icon/javascript.svg',
      alt: 'Javascript Logo'
    },
    {
      name: 'PHP',
      link: 'https://www.php.net/',
      img: '/icon/php.svg',
      alt: 'PHP Logo'
    },
  ],
  sideProjects: [
    {
      name: 'Vue 3',
      link: 'https://v3.vuejs.org',
      img: 'icon/vue.svg',
      alt: 'Vue Logo'
    },
    {
      name: 'Svelte',
      link: 'https://svelte.dev/',
      img: '/icon/svelte.svg',
      alt: 'Svelte Logo'
    },
    {
      name: 'Laravel',
      link: 'https://laravel.com/',
      img: '/icon/laravel.svg',
      alt: 'Laravel Logo'
    },
  ],
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}