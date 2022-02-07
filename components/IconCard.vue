<template>
  <div class="card">
    <h3 class="mb-0 text-center">{{ heading }}</h3>
    <div class="flex justify-center flex-wrap" >
      <div v-for="icon in icons" :key="icon.name" :title="icon.alt">
        <a
          target="_blank"
          :href="icon.link"
          class="flex flex-col items-center logo-link"
        >
          <figure>
            <img
              :class="[mini ? 'logo-mini mt-5' : 'logo mt-4']"
              :src="[icon.imgDark != null && $colorMode.preference == 'light' ? icon.imgDark : icon.img]"
              :alt="icon.alt"
            />
          </figure>
          <figcaption class="mt-1">{{ icon.name }}</figcaption>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    icons: Array,
    mini: Boolean
  }
}
</script>