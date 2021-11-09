<template>
  <div class="flex flex-col justify-center items-center py-52 bg-gradient-to-tr from-indigo-900 to-gray-600 text-indigo-200 hero text-center">
    <slot />
  </div>
</template>

<style scoped>
.hero {
  margin-top: -48px;
  margin-bottom: -75px;
}
</style>