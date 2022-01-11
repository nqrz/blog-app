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
  data() {
    return {
      scrollPos: null,
    }
  },
  async mounted() {
    window.addEventListener('scroll', this.getScrollY)
  },
  methods: {
    getScrollY () {
      this.scrollPos = window.scrollY
    }
  },
  computed: {
    sidebar () {
      return this.$store.state.sidebar
    },
  }
}
</script>

<template>
  <div>
    <Navbar />
    <div class="bg-pastel-gray dark:bg-night-black fixed inset-0 top-10 overflow-y-scroll snap-y snap-proximity">
      <Nuxt />
      <Footer class="mt-3" />
    </div>
  </div>
</template>
