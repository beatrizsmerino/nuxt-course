<template>
  <header class="page-header">
    <PageNav />
  </header>
</template>

<script>
import PageNav from '@/components/Page/PageNav'

export default {
  name: 'PageHeader',
  components: {
    PageNav,
  },
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 2rem;
  background-color: $color-brand-2;
}
</style>
