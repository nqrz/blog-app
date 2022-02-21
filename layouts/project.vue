<script>
export default {
  head({$seoMeta}){
    return {
      title: 'Nizar Baihaqi',
      meta: $seoMeta({}, false),
      link: [
        { rel: 'author', href: 'https://nizarbaihaqi.com/about' }
      ]
    }
  },
}
</script>

<template>
  <div class="bg-pastel-gray dark:bg-night-black">
    <Navbar />
    <Nuxt />
    <Footer class="mt-3" />
  </div>
</template>
