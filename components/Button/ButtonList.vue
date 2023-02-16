<template>
  <ul class="button-list">
    <li v-for="button in buttonList" :key="button" class="button-list__item">
      <a
        :href="button.path"
        target="_blank"
        rel="noopener noreferrer"
        :class="`button ${button.modifier}`"
      >
        {{ button.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ButtonList',
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

.button {
  display: inline-block;
  padding: 0.5rem 2rem;
  border-width: 0.2rem;
  border-style: solid;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-decoration: none;

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
