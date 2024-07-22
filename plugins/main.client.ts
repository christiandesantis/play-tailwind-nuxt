export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Dynamically import the custom main.js script
    import('~/assets/js/main.js')
    .catch((error) => {
      console.error('Error loading custom main.js script plugin:', error);
    });
  }
});
