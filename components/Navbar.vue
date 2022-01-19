<template>
  <div class="fixed top-0 inset-x-0 z-10 bg-pastel-blue dark:bg-night-purple">
    <div class="flex justify-center max-w-full">
      <nav class="container flex justify-between items-center px-2">
        <NuxtLink to="/" class="flex nav-link">
          <img src="~assets/logo-light-24x24.png" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
          <img src="~assets/logo-dark-24x24.png" alt="logo" class="w-6" v-else />
          <span class="ml-2 font-bold">
            Nizar Baihaqi
          </span>
        </NuxtLink>
        <div class="flex">
          <div class="hidden sm:flex">
            <NuxtLink class="nav-link" to="/" title="Homepage">Home</NuxtLink>
            <NuxtLink class="nav-link" to="/articles" title="Article Page">Articles</NuxtLink>
            <!-- <NuxtLink class="nav-link" to="/projects" title="Project page">Projects</NuxtLink> -->
            <NuxtLink class="nav-link" to="/about" title="About page">About me</NuxtLink>
          </div>
          <button class="nav-link" @click="toggleColor()">
            <i class="fas fa-sun transition-all" v-if="$colorMode.preference == 'light'"></i>
            <i class="fas fa-moon" v-else></i>
          </button>
          <button @click="toggleSidebar" class="sm:hidden nav-link">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </div>
    <div v-show="open" class="fixed inset-0 sm:hidden">
      <div @click="toggleSidebar" 
        class="transition-all bg-black bg-opacity-75" 
        :class="[dimmer && open ? 'w-full h-full' : 'w-0 h-0']"
        title="Close sidebar"
      />
    </div>
    <nav class="fixed top-0 bg-pastel-blue dark:bg-night-purple transition-all h-full flex flex-col w-4/6 overflow-hidden sm:hidden" :class="[open ? 'right-0 opacity-100' : ' -right-full opacity-0']">
      <div class="flex items-center">
        <button @click="toggleSidebar" class="py-3" title="Close sidebar">
          <i class="fas fa-times w-8 text-center"></i>
        </button>
        <figure class="mx-auto transform -translate-x-4" title="Nizar Baihaqi Logo">
          <img src="~assets/logo-light-24x24.png" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
          <img src="~assets/logo-dark-24x24.png" alt="logo" class="w-6" v-else />
        </figure>
      </div>
      <NuxtLink to="/" class="w-full side-link" title="Link to homepage">
        <div @click="toggleSidebar" class="w-full py-2">
          <i class="fas fa-home w-8 text-center"></i>Home
        </div>
      </NuxtLink>
      <NuxtLink to="/articles" class="w-full side-link" title="Link to article page">
        <div @click="toggleSidebar" class="w-full py-2">
          <i class="fas fa-home w-8 text-center"></i>Articles
        </div>
      </NuxtLink>
      <!-- <NuxtLink to="/projects" class="w-full side-link" title="Link to project page">
        <div @click="toggleSidebar" class="w-full py-2">
          <i class="fas fa-stream w-8 text-center"></i>Projects
        </div>
      </NuxtLink> -->
      <NuxtLink to="/about" class="w-full side-link" title="Link to about page">
        <div @click="toggleSidebar" class="w-full py-2">
          <i class="fas fa-user w-8 text-center"></i>About me
        </div>
      </NuxtLink>
      <a href="https://article.nizarbaihaqi.com" class="side-link py-2" @click="toggleSidebar" title="Link to article page">
        <i class="fas fa-newspaper w-8 text-center"></i>Articles &#8599;
      </a>
      <p class="text-xs text-center mt-1">nqrz @ 2022</p>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      scrollPos: 0,
      dimmer: true
    }
  },
  async mounted() {
    window.addEventListener('scroll', this.getScrollY)
  },
  computed: {
    open () {
      return this.$store.state.sidebar
    }
  },
  methods: {
    getScrollY () {
      this.scrollPos = window.scrollY
    },
    toggleColor () {
      if (this.$colorMode.preference == "dark") {
        this.$colorMode.preference = "light"
      } else {
        this.$colorMode.preference = "dark"
      }
    },
    ...mapMutations({
      toggleSidebar: 'toggleSidebar'
    }),
  }
}
</script>