<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-gray-800 bg-opacity-70" @click="$emit('toggle-login')">
    <div class="w-80 h-60">
      <Card>
        <div class="flex flex-col">
          <img class="w-20 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github logo">
          <p class="text-center mt-2">Login with Github</p>
          <button @click="signIn" class="btn mt-3 rounded-full">Sign in</button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async signIn() {
      const { user, session, error } = await this.$supabase.auth.signIn({
        provider: 'github',
      })
    }
  }
}
</script>