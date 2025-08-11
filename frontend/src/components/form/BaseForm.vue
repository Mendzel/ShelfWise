<template>
  <v-form v-model="model">
    <v-container>
      <slot name="default"></slot>
      <PrimaryButton v-if="!hideButton" :text="submitText" />
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
  import PrimaryButton from '../buttons/PrimaryButton.vue';

  defineProps({
    submitText: {
      type: String,
      default: undefined,
    },
    hideButton: {
      type: Boolean,
      default: false,
    },
  });

  const model = defineModel<boolean>();
</script>

<style lang="scss"></style>
