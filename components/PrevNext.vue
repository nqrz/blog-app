<template>
  <div class="w-full mb-6 px-3">
    <div class="flex justify-between">
      <div>
        <NuxtLink v-if="prev" :to="{ name: 'articles-slug', params: { slug: prev.slug } }">
          &larr; <span class="hover:underline">{{ prev.title }}</span>
        </NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
      <div>
        <NuxtLink v-if="next" :to="{ name: 'articles-slug', params: { slug: next.slug } }">
          <span class="hover:underline">{{ next.title }}</span> &rarr;
        </NuxtLink>
        <span v-else>&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
}
</script>