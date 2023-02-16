<template>
  <component
    :is="getTypeTag"
    :class="`button ${buttonLink.modifier}`"
    :href="buttonLink.path"
    :to="buttonLink.to"
    :target="!buttonLink.to ? `_blank` : ''"
    :rel="!buttonLink.to ? 'noopener noreferrer' : ''"
  >
    {{ buttonLink.name }}
  </component>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    buttonLink: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getTypeTag() {
      if (this.buttonLink.path) {
        return 'a'
      }

      if (this.buttonLink.to) {
        return 'nuxt-link'
      }

      return 'button'
    },
  },
}
</script>

<style lang="scss" scoped>
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
