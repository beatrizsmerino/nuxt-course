<template>
  <div>
    <LogoList :logo-list="logoList" />
  </div>
</template>

<script>
import LogoList from '@/components/LogoList'
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
