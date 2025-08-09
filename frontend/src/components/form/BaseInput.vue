<template>
  <v-text-field :hint="hint" :label="label" :type="type" :clearable="clearable"></v-text-field>
</template>

<script setup lang="ts">
  import { InputType } from './interfaces';
  import type { PropType } from 'vue';

  defineProps({
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<InputType>,
      required: true,
    },
    hint: {
      type: String,
      default: undefined,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="scss"></style>
