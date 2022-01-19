<script>
export default {
  head({$seoMeta}){
    return {
      title: 'Articles',
      meta: $seoMeta({
        title: 'Articles',
        description: 'This is where i post my projects 👌',
        url: 'https://nizarbaihaqi.com/projects'
      }, false)
    }
  },
  data() {
    return {
      searchQuery: '',
      articles: [],
      category: []
    }
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      this.articles = await this.$content('articles')
        .search(searchQuery)
        .sortBy('createdAt', 'desc')
        .fetch()
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<template>
  <div class="container snap-start">
    <h1 class="text-center mt-20">Articles</h1>
    <p class="text-center mb-2">This page uses <a href="https://content.nuxtjs.org" class="link" target="_blank" rel="noopener noreferrer">@nuxt/content &#8599;</a></p>
    <div class="flex justify-center mb-10">
      <div class="px-2">
        <input class="" v-model="searchQuery" autocomplete="off" placeholder="Full text search">
        <button class="btn rounded-md" @click="searchQuery = 'nuxtjs'">Nuxtjs</button>
        <button class="btn rounded-md" @click="searchQuery = 'tailwindcss'">Tailwindcss</button>
        <button class="btn rounded-md mt-2" @click="searchQuery = 'vuex'">Vuex</button>
      </div>
    </div>
    <div v-if="articles[0] === undefined" class="max-w-screen-sm mx-auto">
      <WarnBox class="mx-2">
        There's no article match.
      </WarnBox>
    </div>
    <h2 v-else class="text-center">Newest article</h2>
    <div class="lg:grid grid-cols-2">
      <div class="card snap-start" v-for="article in articles" :key="article.slug" :link="true" :url="article.path">
        <h3 class="text-center">{{ article.title }}</h3>
        <p class="text-center text-sm mb-1">{{ formatDate(article.createdAt) }}</p>
        <div class="flex justify-center gap-2">
          <p class="text-xs text-center inline-block mb-3" v-for="category in article.category" :key="category">
            {{ category }}
          </p>
        </div>
        <p>{{ article.description }}</p>
        <NuxtLink class="link" :to="article.path">
          Read &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>