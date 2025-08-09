<template>
  <BaseForm v-model="model" submit-text="Send">
    <BaseInput label="Login" :type="InputType.INPUT"></BaseInput>
    <BaseInput label="Password" :type="InputType.PASSWORD"></BaseInput>
  </BaseForm>
</template>

<script setup lang="ts">
  import BaseForm from '@/components/form/BaseForm.vue';
  import BaseInput from '@/components/form/BaseInput.vue';
  import { InputType } from '@/components/form/interfaces';
  import { ref } from 'vue';

  const model = ref();
</script>

<style lang="scss"></style>
