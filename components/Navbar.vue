<template>
  <div class="sticky top-0 z-50 bg-pastel-blue dark:bg-night-purple">
    <div class="flex justify-center max-w-full">
      <div class="container max-w-screen-lg flex justify-between items-center">
        <NuxtLink to="/" class="flex ml-2 nav-link">
          <img src="~assets/logo-light-24x24.png" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
          <img src="~assets/logo-dark-24x24.png" alt="logo" class="w-6" v-else />
          <span class="ml-2 font-bold">
            Nizar Baihaqi
          </span>
        </NuxtLink>
        <div class="flex">
          <div class="hidden sm:flex">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            <NuxtLink class="nav-link" to="/todo">Todo</NuxtLink>
            <NuxtLink class="nav-link" to="/about">About me</NuxtLink>
          </div>
          <button class="nav-link" @click="toggleColor()">
            <i class="fas fa-sun transition-all" v-if="$colorMode.preference == 'light'"></i>
            <i class="fas fa-moon" v-else></i>
          </button>
          <a class="btn m-1 rounded-full !px-3 hidden sm:flex" target="_blank" href="https://article.nizarbaihaqi.com">Articles</a>
          <button @click="toggleSidebar" class="sm:hidden nav-link">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-show="open" class="fixed inset-0">
      <div @click="toggleSidebar" 
        class="transition-all bg-black bg-opacity-75" 
        :class="[dimmer && open ? 'w-full h-full' : 'w-0 h-0']"
      />
    </div>
    <div class="fixed top-0 bg-pastel-blue dark:bg-night-purple transition-all h-full flex flex-col w-4/6 overflow-hidden" :class="[open ? 'right-0 opacity-100' : ' -right-full opacity-0']">
      <div class="flex justify-center">
        <NuxtLink to="/">
          <span @click="toggleSidebar">
            <img src="~assets/logo-light-24x24.png" alt="logo" class="w-6 py-3" v-if="$colorMode.preference == 'light'" />
            <img src="~assets/logo-dark-24x24.png" alt="logo" class="w-6 py-3" v-else />
          </span>
        </NuxtLink>
      </div>
      <NuxtLink to="/Todo" class="w-full side-link">
        <div @click="toggleSidebar" class="w-full">
          Todo
        </div>
      </NuxtLink>
      <NuxtLink to="/about" class="w-full side-link">
        <div @click="toggleSidebar" class="w-full">
          About me
        </div>
      </NuxtLink>
      <a href="https://article.nizarbaihaqi.com" class="side-link" @click="toggleSidebar">
        Articles &#8599;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      dimmer: true
    }
  },
  methods: {
    toggleSidebar() {
      this.open = !this.open
    },
    toggleColor () {
      if (this.$colorMode.preference == "dark") {
        this.$colorMode.preference = "light"
      } else {
        this.$colorMode.preference = "dark"
      }
    }
  }
}
</script>