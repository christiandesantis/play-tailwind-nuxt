export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    import('wow.js').then((module) => {
      // Assuming WOW is the default export of the wow.min.js module,
      // and using `any` type assertion to bypass TypeScript's static type checking.
      const WOW: any = module.default;
      new WOW().init();
    });
  }
});
