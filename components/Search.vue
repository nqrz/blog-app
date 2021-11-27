<template>
  <div>
    <input v-model="searchQuery" autocomplete="off" placeholder="Search articles">
    <p>{{ searchQuery }}</p>
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.path">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        this.text = []
        return
      }
      this.articles = await this.$content('articles')
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>