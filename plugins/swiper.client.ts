export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Dynamically import the Swiper JS
    import('~/assets/js/swiper-bundle.min.js')
    .catch((error) => {
      console.error('Error loading Swiper:', error);
    });
  }
});
