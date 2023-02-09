<template>
  <ul class="logo-list">
    <li v-for="logo in logoList" :key="logo" class="logo-list__item">
      <svg-icon :name="logo.name" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LogoList',
  props: {
    logoList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.logo-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:deep(.icon) {
    width: 10rem;
    height: 10rem;
  }
}
</style>
