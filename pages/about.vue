<template>
  <div class="about">
    <section class="page__container page__inner">
      <article>
        <LogoList :logo-list="logoList" />
        <h2 class="title">nuxt-app</h2>
        <ul class="button__list">
          <li class="button__item">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="button button--green"
            >
              Documentation
            </a>
          </li>
          <li class="button__item">
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              rel="noopener noreferrer"
              class="button button--grey"
            >
              GitHub
            </a>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
import LogoList from '@/components/Logo/LogoList'

export default {
  name: 'About',
  components: {
    LogoList,
  },
  data() {
    return {
      logoList: [
        {
          name: 'logo-vue-js',
        },
        {
          name: 'logo-nuxt-js',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 1rem;
  color: $color-brand-1;
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-align: center;
}

.button {
  display: inline-block;
  padding: 0.5rem 2rem;
  border-width: 0.2rem;
  border-style: solid;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-decoration: none;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &--green {
    border-color: $color-brand-1;
    color: $color-brand-1;

    &:hover {
      background-color: $color-brand-1;
      color: $color-white;
    }
  }

  &--grey {
    border-color: $color-brand-2;
    color: $color-brand-2;

    &:hover {
      background-color: $color-brand-2;
      color: $color-white;
    }
  }
}
</style>
