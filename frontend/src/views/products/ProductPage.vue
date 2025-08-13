<template>
  <AppHeader />
  <div class="product-page">
    <!-- Filters Section -->
    <section class="filters">
      <ProductFilters />
    </section>

    <!-- Products Section -->
    <section class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>

    <!-- Pagination Section -->
    <section class="pagination">
      <v-pagination v-model="page" :length="totalPages" />
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import AppHeader from '@/components/navigation/AppHeader.vue';
  import type { ProductListItem } from '@/model/products/interfaces';

  import ProductCard from './ProductCard.vue';
  import ProductFilters from './ProductFilters.vue';

  const products = ref<ProductListItem[]>([
    {
      id: '1',
      name: 'Product 1',
      category: 'Category A',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is a description of Product 1.',
      price: 19.99,
      stock: 100,
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'Product 2',
      category: 'Category B',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is a description of Product 2.',
      price: 19.99,
      stock: 100,
      updatedAt: new Date(),
    },
    // Add more products as needed
  ]);

  const page = ref(1);
  const totalPages = ref(5);
</script>

<style lang="scss" scoped>
  @import '@/styles/colors.scss';

  .product-page {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
</style>
