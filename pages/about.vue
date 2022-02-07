<template>
  <main>
    <div class="container block md:flex mt-6">
      <div itemscope itemtype="https://schema.org/author" class="card block md:flex md:w-7/12">
        <figure class="flex justify-center items-center">
          <img itemprop="image"
            src="~/assets/ijay.jpg"
            alt="Nizar Baihaqi"
            class="rounded-full img"
          />
        </figure>
        <div class="md:ml-6 flex flex-col justify-center">
          <h3 itemprop="name" class="font-semibold mb-2 text-center md:text-left">
            Nizar Baihaqi
          </h3>
          <p itemprop="description">
            Hello, I’m Nizar Baihaqi, A Frontend Web Developer. My tech stack is Nuxtjs which is based on Vuejs and use Tailwindcss utilities for styling.
          </p>
        </div>
      </div>
      <IconCard class="md:w-5/12" heading="Tech Stack" :icons="techStacks" />
    </div>
    <div class="container block md:flex">
      <IconCard class="card md:w-5/12" heading="Side Projects" :icons="sideProjects" />
      <IconCard class="md:w-7/12" heading="Fundamental Skills" :icons="basicSkills" />
    </div>
    <div class="container block md:flex">
      <IconCard class="md:w-1/2" heading="Socials" mini :icons="socials" />
      <IconCard class="md:w-1/2" heading="Contacts" mini :icons="contacts" />
    </div>
  </main>
</template>

<script>
export default {
  head({$seoMeta}){
    return {
      title: 'About Me',
      meta: $seoMeta({
        title: 'About Me',
        description: 'Hello there, check my profile here at my own website. 😎',
        url: 'https://nizarbaihaqi.com/about'
      }, false),
      link: [
        { rel: 'canonical', href: 'https://nizarbaihaqi.com/about' }
      ]
    }
  },
  computed: {
    techStacks () {
      return this.$store.state.techStacks
    },
    sideProjects () {
      return this.$store.state.sideProjects
    },
    basicSkills () {
      return this.$store.state.basicSkills
    },
    socials () {
      return this.$store.state.socials
    },
    contacts () {
      return this.$store.state.contacts
    },
  }
}
</script>