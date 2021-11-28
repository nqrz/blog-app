<template>
  <div>
    <Hero>
      <img src="~assets/logo-dark.svg" alt="logo" class="w-40 spin" v-if="$colorMode.preference == 'light'" />
      <img src="~assets/logo-aqua.svg" alt="logo" class="w-40 spin" v-else />
      <h1 class="font-bold my-4 px-10">Nizar Baihaqi</h1>
      <div>
        <h6>Counter: {{ counter }}</h6>
        <button class="btn rounded-md" @click="addCount">Add count</button>
      </div>
    </Hero>
    <Container>
      <Card>
        <h4 class="text-center">🛠️ Skill set</h4>
        <div class="flex justify-center px-1 flex-wrap">
          <a
            target="_blank"
            href="https://nuxtjs.org/"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg"
              alt="Logo Nuxtjs"
            />
            <p>Nuxtjs</p>
          </a>
          <a
            target="_blank"
            href="https://windicss.org"
            class="flex flex-col items-center logo-link"
          >
            <img
              class="logo"
              src="https://windicss.org/assets/logo.svg"
              alt="Logo Windicss"
            />
            <p>Windicss</p>
          </a>
        </div>
      </Card>
    </Container>
    <Container>
      <Me class="lg:w-8/12" />
      <Contacts class="lg:ml-6 lg:w-4/12"/>
    </Container>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    addCount () {
      this.$store.commit('increment')
    },
  }
}
</script>

<style scoped>
.spin {
  animation: spin 20s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
