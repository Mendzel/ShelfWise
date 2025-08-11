<template>
  <v-card
    class="card"
    :title="title"
    :subtitle="subtitle"
    :variant="variant"
    :elevation="elevation"
    :hover="hover"
    :loading="loading"
    :disabled="disabled"
    :href="href"
    :prepend-icon="prependIcon"
    :style="{ backgroundColor: color, padding: padding }"
  >
    <slot />

    <v-card-actions>
      <div class="left-actions">
        <slot name="leftActions" />
      </div>
      <div class="right-actions">
        <slot name="rightActions" />
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import { CardVariant } from './interfaces';

  defineProps({
    title: {
      type: String,
      default: undefined,
    },
    subtitle: {
      type: String,
      default: undefined,
    },
    variant: {
      type: String as PropType<CardVariant>,
      default: CardVariant.TONAL,
    },
    elevation: {
      type: [Number, String] as PropType<number | string>,
      default: undefined,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
    padding: {
      type: [Number, String] as PropType<number | string>,
      default: '10px',
    },
    prependIcon: {
      type: String,
      default: undefined,
    },
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/colors.scss';

  .card {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: $primary;
    color: $light-gray;
  }

  .v-card-actions {
    display: flex;
    justify-content: space-between;
  }

  .left-actions {
    display: flex;
    align-items: center;
  }

  .right-actions {
    display: flex;
    align-items: center;
  }
</style>
