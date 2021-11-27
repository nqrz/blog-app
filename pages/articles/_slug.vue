<template>
  <article>
    <Hero>
      <h1>{{ article.title }}</h1>
    </Hero>
    <Container>
      <div class="w-3/12">
        <Card class="sticky top-16 mb-9">
          <nav>
            <ul>
              <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </Card>
      </div>
      <div class="w-9/12 ml-4">
        <Card class="">
          <nuxt-content :document="article" />
        </Card>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </Container>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug ).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
    
  }
}
</script>