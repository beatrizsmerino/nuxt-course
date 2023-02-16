<template>
  <ul class="button-list">
    <li v-for="button in buttonList" :key="button" class="button-list__item">
      <ButtonLink :button-link="button" />
    </li>
  </ul>
</template>

<script>
import ButtonLink from '@/components/Button/ButtonLink'

export default {
  name: 'ButtonList',
  components: {
    ButtonLink,
  },
  props: {
    buttonList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.button-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}
</style>
