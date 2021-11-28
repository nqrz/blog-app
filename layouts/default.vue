<script>
export default {
  head({$seoMeta}){
    return {
      title: 'Nizar Baihaqi',
      meta: $seoMeta({}, false)
    }
  },
  data() {
    return {
      loginModal: false,
      authenticated: false,
      authListener: null,
    }
  },
  async mounted() {
    const { data: authListener } = this.$supabase.auth.onAuthStateChange(
      () => this.checkUser()
    )
    this.authListener = authListener
    this.checkUser()
  },
  methods: {
    toggleModal() {
      this.loginModal = !this.loginModal
    },
    async checkUser() {
      const user = await this.$supabase.auth.user()

      if (user) {
        this.authenticated = true
      } else {
        this.authenticated = false
      }
    }
  },
}
</script>

<template>
  <div class="bg-indigo-200 dark:bg-gray-600 dark:text-gray-200">
    <transition name="page">
      <Login v-show="loginModal" @toggle-login="toggleModal" />
    </transition>
    <Navbar @toggle-login="toggleModal" :auth="authenticated" />
    <Nuxt />
    <Footer />
  </div>
</template>
