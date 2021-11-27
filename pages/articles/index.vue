<template>
  <article>
    <Hero>
      <h1>hei</h1>  
    </Hero>
    <Container>
      <input v-model="searchQuery" autocomplete="off" placeholder="Search Category" class="p-3 rounded-md">
    </Container>
    <Container v-for="article in articles" :key="article.slug">
      <Card :link="true" :url="article.path">
        <h1>{{ article.title }}</h1>
        <h4>{{ article.description }}</h4>
        <NuxtLink :to="article.path">Read more &rarr;</NuxtLink>
      </Card>
    </Container>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles').fetch()

    return {
      articles
    }
  },
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = await this.$content('articles').fetch()
      }
      this.articles = await this.$content('articles')
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>