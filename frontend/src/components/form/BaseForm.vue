<template>
  <v-form v-model="model">
    <v-container>
      <slot name="default"></slot>
      <PrimaryButton :text="submitText" />
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
  import PrimaryButton from '../buttons/PrimaryButton.vue';

  defineProps({
    submitText: {
      type: String,
      required: true,
    },
  });

  const model = defineModel();
</script>

<style lang="scss"></style>
