<template>
  <v-btn :prepend-icon="prependIcon" :append-icon="appendIcon" :size="size"> {{ text }} </v-btn>
</template>

<script setup lang="ts">
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
      default: ButtonSize.REGULAR,
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

<style lang="scss"></style>
