<template>
  <main class="container max-w-screen-sm h-[75vh] flex justify-center items-center">
    <div class="card flex flex-col items-center">
      <h3 v-if="error.statusCode === 404">Your page request is doesn't exist in this website</h3>
      <h3 v-else>An error occured</h3>
      <code class="text-sm mb-3">404 Not Found</code>
      <NuxtLink class="btn rounded-md" to="/">Home page</NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error']
}
</script>
