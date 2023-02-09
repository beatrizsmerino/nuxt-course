<template>
  <div>
    <div class="logo__list">
      <svg-icon class="logo" name="logo-vue-js" />
      <svg-icon class="logo" name="logo-nuxt-js" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
.logo {
  width: 10rem;
  height: 10rem;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
