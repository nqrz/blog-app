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
  <div>
    <Navbar />
    <div class="bg-pastel-gray dark:bg-night-black fixed inset-0 top-10 overflow-y-scroll">
      <Nuxt />
      <Footer class="mt-3" />
    </div>
  </div>
</template>
