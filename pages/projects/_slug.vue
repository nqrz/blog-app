<template>
  <div class="mb-2">
    <Hero>
      <h1>{{ project.title }}</h1>
      <div class="flex gap-4 mb-2">
        <div class="text-gray-700 dark:text-gray-300" v-for="category in project.category" :key="category">
          {{ category }}
        </div>
      </div>
    </Hero>
    <Container>
      <div class="w-full lg:w-3/12 hidden lg:flex">
        <div class="sticky top-14 mb-14">
          <Card>
            <nav>
              <ul>
                <li v-for="link of project.toc" :key="link.id">
                  <NuxtLink :to="`#${link.id}`"><i class="fas fa-hashtag"></i> {{ link.text }}</NuxtLink>
                </li>
              </ul>
            </nav>
          </Card>
          <Card>
            <div class="flex items-center">
              <img :src="`/profile-pic/${author.img}`" :alt="author.alt" class="rounded-full w-12">
              <p class="ml-2">{{ author.name }} - {{ author.slug }}</p>
            </div>
          </Card>
          <p class="text-center">Updated : {{ formatDate(project.updatedAt) }}</p>
          <Logo class="mt-4" :category="project.category" />
        </div>
      </div>
      <div class="w-full lg:w-9/12 md:ml-4">
        <Card>
          <article>
            <nuxt-content :document="project" />
          </article>
        </Card>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  head({$seoMeta}){
    return {
      title: this.project.title,
      meta: $seoMeta({
        title: this.project.title,
        description: this.project.description,
        image: `https://nizarbaihaqi.com/banner/${this.project.img}`,
        url: `https://nizarbaihaqi.com${this.project.path}`
      }, false)
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  async asyncData ({ $content, params }) {
    const project = await $content('projects', params.slug ).fetch()

    const [prev, next] = await $content('projects')
      .only(['title', 'slug'])
      .sortBy('updatedAt', 'desc')
      .surround(params.slug)
      .fetch()

    const author = await $content('profile', project.author).fetch()

    return {
      project,
      author,
      prev,
      next
    }
  }
}
</script>
