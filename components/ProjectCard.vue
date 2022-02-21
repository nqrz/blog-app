<script>
export default {
  props: {
    projects: Array
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
}
</script>

<template>
  <div class="max-w-screen-lg mx-auto lg:grid grid-cols-2">
    <div class="card overflow-hidden p-0" v-for="project in projects" :key="project.slug" link :url="project.path">
      <div class="card-image" :style="`background-image: url(/banner/${project.img});`"/>
      <div class="py-4 px-6">
        <h3 class="text-center">{{ project.title }}</h3>
        <p class="text-center text-sm mb-1">{{ formatDate(project.createdAt) }}</p>
        <div class="flex justify-center gap-2">
          <p class="text-xs text-center inline-block mb-3" v-for="category in project.category" :key="category">
            {{ category }}
          </p>
        </div>
        <p>{{ project.description }}</p>
        <NuxtLink class="link" :to="project.path">
          Read &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-image {
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: aqua;
}
</style>
