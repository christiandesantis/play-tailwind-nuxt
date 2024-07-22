<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <AppHeader :home="route.name === 'index'" />
    <slot />
    <AppFooter />
  </div>
</template>
