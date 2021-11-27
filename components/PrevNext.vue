<template>
  <div class="flex justify-between w-full">
    <div>
      <NuxtLink v-if="prev" :to="prev.path">
        &larr; <span class="hover:underline">{{ prev.title }}</span>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div>
      <NuxtLink v-if="next" :to="next.path">
        <span class="hover:underline">{{ next.title }}</span> &rarr;
      </NuxtLink>
      <span v-else>&nbsp;</span>
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
  }
}
</script>