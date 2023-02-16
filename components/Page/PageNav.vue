<template>
  <nav class="page-nav">
    <ul class="page-nav__list">
      <li v-for="link in getLinkList" :key="link.id" class="page-nav__item">
        <nuxt-link class="page-nav__link" :to="link.path">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
  data() {
    return {
      linkList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
    }
  },
  computed: {
    getLinkList() {
      return this.linkList
    },
  },
}
</script>

<style lang="scss" scoped>
.page-nav {
  color: $color-brand-1;

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      &:after {
        content: '|';
        display: inline-block;
        margin: 0 0.5rem;
      }
    }
  }

  &__link {
    padding: 0.5rem;
    font-weight: bold;
    text-decoration: none;
	color: $color-brand-1;

    &:hover,
    &.router-link-exact-active {
      color: $color-brand-3;
    }
  }
}
</style>
