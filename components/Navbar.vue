<template>
  <div class="flex justify-center max-w-full bg-pastel-blue dark:bg-night-purple sticky top-0 z-50">
    <div class="container max-w-screen-lg flex justify-between items-center">
      <NuxtLink to="/" class="flex ml-2 nav-link">
        <img src="~assets/logo-dark.svg" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
        <img src="~assets/logo-aqua.svg" alt="logo" class="w-6" v-else />
        <span class="ml-2 font-bold hidden sm:block">
          Nizar Baihaqi
        </span>
      </NuxtLink>
      <div>
        <button class="nav-link" @click="toggleColor()">
          <i class="fas fa-sun transition-all" v-if="$colorMode.preference == 'light'"></i>
          <i class="fas fa-moon" v-else></i>
        </button>
        <NuxtLink class="nav-link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="nav-link" to="/todo">Todo</NuxtLink>
        <NuxtLink class="nav-link" to="/about">About me</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleColor () {
      if (this.$colorMode.preference == "dark") {
        this.$colorMode.preference = "light"
      } else {
        this.$colorMode.preference = "dark"
      }
    },
  }
}
</script>