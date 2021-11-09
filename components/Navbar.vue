<template>
  <div
    class="
      flex
      justify-center
      max-w-full
      bg-gradient-to-tr
      from-blue-600
      to-blue-700
      text-gray-200
      sticky
      top-0
    "
  >
    <div
      class="container max-w-screen-lg flex justify-between items-center h-12"
    >
      <NuxtLink to="/" class="flex ml-2">
        <img src="~assets/logo-aqua.svg" alt="logo" class="w-6" />
        <span class="ml-2 aqua font-bold hover:text-white transition-all">
          Nizar Baihaqi
        </span>
      </NuxtLink>
      <div>
        <NuxtLink class="mr-4 hover:text-white" to="/projects"
          >Projects</NuxtLink
        >
        <NuxtLink class="mr-4 hover:text-white" to="/about">About me</NuxtLink>
      </div>
    </div>
  </div>
</template>
