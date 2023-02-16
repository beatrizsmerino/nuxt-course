<template>
  <div>
    <PageHeader />
    <LogoList :logo-list="logoList" />
  </div>
</template>

<script>
import PageHeader from '@/components/Page/PageHeader'
import LogoList from '@/components/Logo/LogoList'

export default {
  name: 'About',
  components: {
    PageHeader,
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
