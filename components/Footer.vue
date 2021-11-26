<template>
  <div class="block md:flex justify-center py-11 bg-indigo-300 dark:bg-gray-900 dark:text-indigo-200 mt-2">
    <div class="flex flex-col items-center md:items-end md:pr-2">
      <router-link to="/" class="flex">
        <img src="~assets/logo-dark.svg" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
        <img src="~assets/logo-aqua.svg" alt="logo" class="w-6" v-else />
        <span class="ml-2 hover:text-gray-800 dark:hover:text-indigo-50 transition-all">Nizar Baihaqi</span>
      </router-link>
      <code class="mt-3 text-xs">Created in my home with</code>
      <code class="text-xs">Nuxtjs and Tailwind</code>
    </div>
    <div
      class="
        flex flex-col
        items-center
        mt-3
        md:mt-0 md:items-start md:pl-2 md:border-l-2
        border-black
        dark:border-indigo-200
      "
    >
      <a
        class="hover:text-gray-800 dark:hover:text-indigo-50"
        target="_blank"
        href="mailto:nizarbaihaq@gmail.com"
      >
        <i class="far fa-envelope"></i> nizarbaihaq@gmail.com
      </a>
      <a
        class="hover:text-gray-800 dark:hover:text-indigo-50"
        target="_blank"
        href="https://www.linkedin.com/in/nizar-baihaqi/"
      >
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a class="hover:text-gray-800 dark:hover:text-indigo-50" href="https://dribbble.com/ijaybaihaqi">
        <i class="fab fa-dribbble"></i> Dribbble
      </a>
    </div>
  </div>
</template>