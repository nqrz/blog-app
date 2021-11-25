<template>
  <div>
    <Hero>
      <h1 class="font-bold mb-4">Projects</h1>
      <h6>Look what i've done 😲</h6>
      <code class="mt-2">Disclaimer: Some of these project maybe still in Development</code>
      <code>please be patient 👌</code>
    </Hero>
    <Container>
      <Card :button="true" url="#">
        <h4 class="text-center mb-4">🛒 E-Commerce</h4>
        <p class="mb-4">
          Are you a bussiness expert? or a just a small bussiness owner? Maybe i
          have something for you. Check this example for your new official
          website. (tip : it is all customizeable).
        </p>
        <p>To the MOOOON!! 🌑</p>
      </Card>
    </Container>
    <Container>
      <Card :button="true" url="https://greialdy.netlify.app">
        <h4 class="text-center mb-4">😎 Landing Page</h4>
        <p class="mb-4">
          I created landing page that fit for portofolio, company profile, and
          many more. That needs an online professional profile for their career.
        </p>
        <p>(This is my friend request)</p>
      </Card>
    </Container>
    <Container>
      <Card :button="true" url="#">
        <h4 class="text-center mb-4">📝 Blog Page</h4>
        <p class="mb-4">
          If you struggle as a writer and want to have a simple custom blog page
          for your writing career, then you must check this example, it is
          customizeable 🎉
        </p>
      </Card>
    </Container>
  </div>
</template>