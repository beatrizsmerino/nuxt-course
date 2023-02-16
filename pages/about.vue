<template>
  <div class="about">
    <section class="page__container page__inner">
      <LogoList :logo-list="logoList" />
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
