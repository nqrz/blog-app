<template>
  <div>
    <div class="banner mb-3">
      <img src="~assets/logo-light-256x256.png" alt="logo" class="w-40 spin" v-if="$colorMode.preference == 'light'" />
      <img src="~assets/logo-dark-256x256.png" alt="logo" class="w-40 spin" v-else />
      <h1 class="font-bold my-4 px-10">Nizar Baihaqi</h1>
      <div class="mb-2">
        <h2>Counter: {{ counter }}</h2>
        <button class="btn rounded-md" @click="addCount">Add count</button>
      </div>
      <Arrow />
    </div>
    <div class="container block md:flex">

      <!-- Article page -->

      <div class="card md:w-4/12">
        <img class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
        <h3 class="text-center">Article Page</h3>
        <p class="mb-2">Using Vuex and Nuxt Content</p>
        <NuxtLink class="link" to="/todo">Try &#8599;</NuxtLink>
        <a href="https://github.com/nqrz/article-page" class="link" target="_blank" rel="noopener noreferrer">Repo &#8599;</a>
      </div>

      <!-- E-Commerce -->

      <div class="card md:w-4/12">
        <img class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
        <h3 class="text-center">E-Commerce</h3>
        <p class="mb-2">Using Vuex</p>
        <a href="https://github.com/nqrz/ecommerce-nuxt" class="link" target="_blank" rel="noopener noreferrer">Repo &#8599;</a>
      </div>

      <!-- Portofolio page -->

      <div class="card md:w-4/12">
        <img class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
        <h3 class="text-center">Portofolio page</h3>
        <p class="mb-2">Using Vuex</p>
        <a href="https://github.com/nqrz/nizarbaihaqi.com" class="link" target="_blank" rel="noopener noreferrer">Repo &#8599;</a>
      </div>

    </div>
    <div class="container block md:flex">
      <Me class="md:w-9/12" />
      <Contacts class="md:ml-6 md:w-3/12 mt-6 lg:mt-3"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    addCount () {
      this.$store.commit('increment')
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
}
</script>

<style scoped>
.spin {
  animation: spin 20s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
