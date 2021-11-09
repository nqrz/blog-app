<template>
  <div class="block md:flex justify-center py-11 bg-gray-900 text-indigo-300">
    <div class="flex flex-col items-center md:items-end md:pr-2">
      <router-link to="/" class="flex">
        <img src="../assets/logo-aqua.svg" alt="logo" class="w-6" />
        <span class="ml-2 hover:text-white transition-all">Nizar Baihaqi</span>
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
        border-indigo-50
      "
    >
      <a
        class="hover:text-white"
        target="_blank"
        href="mailto:nizarbaihaq@gmail.com"
      >
        <i class="far fa-envelope"></i> nizarbaihaq@gmail.com
      </a>
      <a
        class="hover:text-white"
        target="_blank"
        href="https://www.linkedin.com/in/nizar-baihaqi/"
      >
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a class="hover:text-white" href="https://dribbble.com/ijaybaihaqi">
        <i class="fab fa-dribbble"></i> Dribbble
      </a>
    </div>
  </div>
</template>