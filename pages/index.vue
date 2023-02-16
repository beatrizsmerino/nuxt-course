<template>
  <div>
    <PageHeader />
    <Tutorial />
  </div>
</template>

<script>
import PageHeader from '@/components/Page/PageHeader'
import Tutorial from '@/components/Tutorial'

export default {
  name: 'IndexPage',
  components: {
    PageHeader,
    Tutorial,
  },
}
</script>
