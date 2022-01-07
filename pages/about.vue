<template>
  <div>
    <div class="container block md:flex mt-6">
      <Me class="md:w-7/12" />
      <IconCard class="md:w-5/12" heading="Tech Stack" :icons="techStacks" />
    </div>
    <div class="container block md:flex">
      <IconCard class="card md:w-5/12" heading="Side Projects" :icons="sideProjects" />
      <IconCard class="md:w-7/12" heading="Basic Skills" :icons="basicSkills" />
    </div>
    <div class="container block md:flex">
      <IconCard class="md:w-1/2" heading="Socials" :mini="true" :icons="socials" />
      <IconCard class="md:w-1/2" heading="Contacts" :mini="true" :icons="contacts" />
    </div>
  </div>
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
      }, false)
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