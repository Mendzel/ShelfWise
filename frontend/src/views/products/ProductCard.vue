<template>
  <BaseCard
    :key="product.id"
    class="product-card"
    :title="product.name"
    :subtitle="product.category"
  >
    <img :src="product.imageUrl" alt="Product Image" class="product-image" />
    <p class="product-description">{{ product.description }}</p>
    <template #right-actions>
      <SecondaryButton text="Edit" @click="editProduct(product.id)" />
      <SecondaryButton text="Delete" @click="deleteProduct(product.id)" />
    </template>
  </BaseCard>
</template>
<script setup lang="ts">
  import type { PropType } from 'vue';

  import BaseCard from '@/components/contains/BaseCard.vue';
  import SecondaryButton from '@/components/buttons/SecondaryButton.vue';
  import type { ProductListItem } from '@/model/products/interfaces';

  defineProps({
    product: {
      type: Object as PropType<ProductListItem>,
      required: true,
    },
  });

  const editProduct = (id: string) => {
    console.log(`Edit product with ID: ${id}`);
  };

  const deleteProduct = (id: string) => {
    console.log(`Delete product with ID: ${id}`);
  };
</script>
