<template>
  <div class="home">
    <PageHeader />
    <main>
      <Tutorial />
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/Page/PageHeader'
import Tutorial from '@/components/Tutorial'

export default {
  name: 'Home',
  components: {
    PageHeader,
    Tutorial,
  },
}
</script>
