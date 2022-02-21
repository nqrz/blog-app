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

<template>
  <main class="max-w-screen-lg mx-auto">
    <div class="container block lg:flex">
      <div itemscope itemtype="https://schema.org/author" class="card block lg:flex lg:w-7/12">
        <figure class="flex justify-center items-center">
          <img itemprop="image"
            src="~/assets/ijay.jpg"
            alt="Nizar Baihaqi"
            class="rounded-full img"
          />
        </figure>
        <div class="lg:ml-6 flex flex-col justify-center">
          <h3 itemprop="name" class="font-semibold mb-2 text-center lg:text-left">
            Nizar Baihaqi
          </h3>
          <p itemprop="description">
            Hello, I’m Ijay from Indonesia. I am a Fullstack Web Developer.
          </p>
        </div>
      </div>
      <IconCard class="hidden lg:block lg:w-5/12" heading="Tech Stack" :icons="techStacks" />
    </div>
    <div class="container block lg:flex">
      <div class="card px-3 lg:px-6 lg:w-9/12">
        <h2 class="text-center">Biography</h2>
        <p class="first-letter:ml-10">My name is Nizar Baihaqi, my nickname is Ijay. I'm a Fullstack Web Developer. I can build websites with Vuejs or Reactjs, and their big framework like Nuxtjs and Nextjs. For backend i prefer PostgreSQL but i can work with MySQL too.</p>
        <p class="text-xl my-4 mx-5 lg:mx-20 border-l-2 pl-2 border-black dark:border-white">"Being a Developer must have adaptation skill. No matter how good the framework, we must choose the right tool for the right task."</p>
        <p class="first-letter:ml-10">So, i can adapt my skill to another programming language like Solidity and PHP. Or using another frameworks like SvelteKit or Laravel. You can see some of my projects <NuxtLink class="link" to="/projects">here &rarr;</NuxtLink>.</p>
        <div class="mt-3">
          <h2 class="text-center">Certificates</h2>
          <div class="flex flex-col justify-center items-center text-center">
            <div class="bnsp-img"/>
            <h3>Junior Web Developer</h3>
            <p>BNSP (<span class="italic">Indonesian Professional Certification Authority</span>)</p>
            <p class="mb-3">August 2021 - August 2024</p>
            <a class="link" href="/files/sertifikat-junior-web-developer.pdf" target="_blank" rel="noopener noreferrer">See &#8599;</a>
          </div>
        </div>
        <div class="mt-3">
          <h2 class="text-center">School</h2>
          <div class="flex flex-col justify-center items-center text-center">
            <div class="ma-24-img" />
            <h3>MA Persis 24 Rancaekek</h3>
            <p class="mb-3">2017 - 2020</p>
            <a class="link" href="http://ppi24.sch.id" target="_blank" rel="noopener noreferrer">Webpage &#8599;</a>
          </div>
        </div>
      </div>
      <div class="lg:w-3/12 h-full lg:sticky top-0">
        <IconCard heading="Socials" mini :icons="socials" />
        <IconCard heading="Contacts" mini :icons="contacts" />
      </div>
    </div>
    <div class="container block lg:flex">
      <IconCard class="card lg:w-5/12" heading="Side Projects" :icons="sideProjects" />
      <IconCard class="lg:w-7/12" heading="Fundamental Skills" :icons="basicSkills" />
    </div>
  </main>
</template>

<style scoped>
.bnsp-img {
  height: 150px;
  width: 250px;
  background-image: url(/icon/bnsp.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ma-24-img {
  height: 250px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  background-image: url(/img/ma-24.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: aqua;
}
</style>
