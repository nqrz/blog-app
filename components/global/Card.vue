<template>
  <div
    class="
      lg:rounded-lg
      bg-indigo-50
      shadow-xl
      flex
      my-3
      overflow-hidden
      w-full
      card
    "
  >
    <div class="py-7 px-7 w-full">
      <slot />
      <a
        target="_blank"
        :href="url"
        v-show="button"
        class="block lg:hidden text-blue-600 hover:text-blue-400 pt-2"
      >
        Take a look &rarr;
      </a>
    </div>
    <a target="_blank" :href="url" v-show="button" class="hidden lg:block">
      <button class="btn h-full lg:rounded-r-lg px-4">
        <i class="fas fa-chevron-right text-white text-4xl"></i>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    button: Boolean,
    url: String,
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .btn {
    transform: translateX(55px);
    transition: 0.4s ease-in-out all;
  }

  .card:hover .btn {
    transform: translateX(0px);
  }
}
</style>