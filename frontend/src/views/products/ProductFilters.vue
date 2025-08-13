<template>
  <div class="filters">
    <BaseInput label="Search Products" :type="InputType.TEXT" />
  </div>
  <div>
    <PrimaryButton text="Send" />
  </div>
</template>
<script setup lang="ts">
  import BaseInput from '@/components/form/BaseInput.vue';
  import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
  import { InputType } from '@/components/form/interfaces';
</script>

<style scoped lang="scss">
  .filters {
    display: flex;
    gap: 10px;
    padding: 20px;
  }
</style>
