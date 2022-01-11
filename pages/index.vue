<template>
  <main>
    <article itemscope itemtype="https://schema.org/Article">
      <header class="banner mb-3 snap-start">
        <figure>
          <img width="160" height="160" src="~assets/logo-light-256x256.png" alt="logo" class="w-40 spin" v-if="$colorMode.preference == 'light'" />
          <img width="160" height="160" src="~assets/logo-dark-256x256.png" alt="logo" class="w-40 spin" v-else />
        </figure>
        <h1 itemprop="name" class="font-bold my-4 px-10">Nizar Baihaqi</h1>
        <h3>Counter: {{ number }}</h3>
        <div class="mb-2 flex gap-2">
          <button class="btn rounded-md" @click="count(-1)">
            <i class="fas fa-minus"></i>
          </button>
          <button class="btn rounded-md" @click="count(1)">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <Arrow />
      </header>
      <section itemprop="articleBody" class="container block md:flex">

        <!-- Article page -->

        <section itemprop="articleSection" class="card md:w-4/12 snap-start">
          <figure>
            <img itemprop="image" width="80" height="80" class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
          </figure>
          <h3 class="text-center">Article Page</h3>
          <p class="mb-2">Using Vuex and Nuxt Content</p>
          <NuxtLink class="link" to="/todo">Try &#8599;</NuxtLink>
          <a href="https://github.com/nqrz/article-page" class="link" target="_blank">Repo &#8599;</a>
        </section>

        <!-- E-Commerce -->

        <section itemprop="articleSection" class="card md:w-4/12 snap-start">
          <figure>
            <img itemprop="image" width="80" height="80" class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
          </figure>
          <h3 class="text-center">E-Commerce</h3>
          <p class="mb-2">Using Vuex</p>
          <a href="https://github.com/nqrz/ecommerce-nuxt" class="link" target="_blank">Repo &#8599;</a>
        </section>

        <!-- Portofolio page -->

        <section itemprop="articleSection" class="card md:w-4/12 snap-start">
          <figure>
            <img itemprop="image" width="80" height="80" class="h-20 mb-3 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Logo Vue">
          </figure>
          <h3 class="text-center">Portofolio page</h3>
          <p class="mb-2">Using Vuex</p>
          <a href="https://github.com/nqrz/nizarbaihaqi.com" class="link" target="_blank">Repo &#8599;</a>
        </section>

      </section>
      <section class="container block md:flex">
        <Me class="md:w-6/12" />
        <IconCard class="md:w-3/12" heading="Social Media" :icons="socials" :mini="true" />
        <IconCard class="md:w-3/12" heading="Contacts" :icons="contacts" :mini="true" />
      </section>
    </article>
  </main>
</template>

<script>
export default {
  head () {
    return {
      link: [
        { rel: 'canonical', href: 'https://nizarbaihaqi.com' }
      ]
    }
  },
  async asyncData({ $supabase }) {
    const { data: counter, error } = await $supabase
      .from('counter')
      .select('*')
      .eq('id', 1)

    return {
      number: counter[0].number,
      error
    }
  },
  computed: {
    socials () {
      return this.$store.state.socials
    },
    contacts () {
      return this.$store.state.contacts
    },
  },
  methods: {
    async count(val) {
      const counted = this.number += val
      const { data, error } = await this.$supabase
        .from('counter')
        .update({ number: counted })
        .eq('id', 1)

      console.log(`Changed counter to: ${counted}`);

      return {
        data,
        error
      }
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
