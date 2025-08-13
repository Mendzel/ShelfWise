<template>
  <v-dialog v-model="model" :persistent="persistent" class="modal">
    <v-card class="modal-card" :title="title">
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
  </v-dialog>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: undefined,
    },
    persistent: {
      type: Boolean,
      default: false, // Prevent closing the modal by clicking outside
    },
  });

  const model = defineModel<boolean>();
</script>

<style lang="scss" scoped>
  @import '@/styles/colors.scss';

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-card {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: $primary;
    color: $light-gray;
  }

  .v-card-actions {
    display: flex;
    justify-content: space-between;
    padding: 16px;
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
