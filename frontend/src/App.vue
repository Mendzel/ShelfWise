<script setup lang="ts"></script>

<template>
  <v-app>
    <RouterView class="body" />
  </v-app>
</template>

<style scoped lang="scss">
  @import 'styles/colors.scss';

  .body {
    background-color: $background;
    height: 100vh;
    width: 100vw;
  }
</style>
