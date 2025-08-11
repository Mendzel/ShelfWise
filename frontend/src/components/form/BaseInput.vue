<template>
  <v-text-field
    class="base-input"
    :hint="hint"
    :label="label"
    :type="type"
    :clearable="clearable"
    :variant="variant"
    :placeholder="placeholder"
    :persistent-hint="persistentHint"
    :style="{ color: color }"
  ></v-text-field>
</template>

<script setup lang="ts">
  import { InputType, InputVariant } from './interfaces';
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
    variant: {
      type: String as PropType<InputVariant>,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    persistentHint: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: undefined,
    },
  });
</script>
