<template>
  <div
    class="
      flex
      justify-center
      max-w-full
      bg-blue-100
      dark:bg-blue-900
      dark:text-gray-200
      sticky
      top-0
      z-50 
      bg-opacity-80
      dark:bg-opacity-90
      transition-all
      text-gray-700
    "
  >
    <div
      class="container max-w-screen-lg flex justify-between items-center h-12"
    >
      <NuxtLink to="/" class="flex ml-2 text-gray-800 hover:text-black dark:text-blue-200  dark:hover:text-white">
        <img src="~assets/logo-dark.svg" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
        <img src="~assets/logo-aqua.svg" alt="logo" class="w-6" v-else />
        <span class="ml-2 font-bold hidden sm:block">
          Nizar Baihaqi
        </span>
      </NuxtLink>
      <div>
        <button class="mr-4 hover:text-black dark:hover:text-white" @click="toggleColor()">
          <i class="fas fa-sun transition-all" v-if="$colorMode.preference == 'light'"></i>
          <i class="fas fa-moon" v-else></i>
        </button>
        <!-- <NuxtLink class="mr-4 hover:text-black dark:hover:text-white" to="/articles">Articles</NuxtLink> -->
        <NuxtLink class="mr-4 hover:text-black dark:hover:text-white" to="/projects">Projects</NuxtLink>
        <NuxtLink class="mr-4 hover:text-black dark:hover:text-white" to="/about">About me</NuxtLink>
        <NuxtLink v-if="auth" class="mr-4 hover:text-black dark:hover:text-white" to="/todos">Todos</NuxtLink>
        <button v-if="auth" @click="signOut" class="mr-4 hover:text-black dark:hover:text-white">Logout</button>
        <button @click="$emit('toggle-login')" v-else class="mr-4 hover:text-black dark:hover:text-white">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    auth: Boolean
  },
  methods: {
    toggleColor () {
      if (this.$colorMode.preference == "dark") {
        this.$colorMode.preference = "light"
      } else {
        this.$colorMode.preference = "dark"
      }
    },
    async signOut () {
      await this.$supabase.auth.signOut()
    }
  }
}
</script>