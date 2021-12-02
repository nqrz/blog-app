<template>
  <div class="flex justify-center items-center">
    <i class="fas fa-chevron-down arrow-down"></i>
  </div>
</template>

<style scoped>
.arrow-down {
  animation: slide-down 2s infinite ease-in-out;
}

@keyframes slide-down {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(25px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>