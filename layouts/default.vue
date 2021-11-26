<script>
export default {
  head({$seoMeta}){
    return {
      title: 'Nizar Baihaqi',
      meta: $seoMeta({}, false)
    }
  }
}
</script>

<template>
  <div class="bg-indigo-200 dark:bg-gray-600 dark:text-gray-200">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
