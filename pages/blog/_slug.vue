<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleString("en", options);
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
};
</script>

<template>
  <article>
    <nav>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />
  </article>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 28px;
}
h2 {
  font-weight: bold;
  font-size: 22px;
}
h3 {
  font-weight: bold;
  font-size: 20px;
}
p {
  margin-bottom: 20px;
}
</style>