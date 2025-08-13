<template>
  <div>
    <BaseModal v-model="isOpen" />
  </div>
  <div>
    <PrimaryButton text="Send" />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
  import BaseModal from '@/components/contains/BaseModal.vue';

  const isOpen = ref(false);
</script>
