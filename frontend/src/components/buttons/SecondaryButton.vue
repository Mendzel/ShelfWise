<template>
  <BaseButton
    class="secondary-button"
    :text="text"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :size="size"
  />
</template>

<script setup lang="ts">
  import BaseButton from './BaseButton.vue';
  import { ButtonSize, ButtonVariant } from './interfaces';
  import type { PropType } from 'vue';

  defineProps({
    text: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: undefined,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: ButtonSize.L,
    },
    prependIcon: {
      type: String,
      default: undefined,
    },
    appendIcon: {
      type: String,
      default: undefined,
    },
  });
</script>

<style lang="scss">
  @import '@/styles/colors.scss';

  .secondary-button {
    color: $secondary;
    background-color: $accent;
    font-weight: bold;
  }
</style>
