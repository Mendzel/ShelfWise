<template>
  <header class="header">
    <div class="left-section">
      <v-btn variant="tonal" icon class="button" @click="navigateToHome"> LOGO </v-btn>
      <nav class="tabs">
        <v-btn variant="tonal" class="button" @click="navigateTo('/products')">Products</v-btn>
        <v-btn variant="tonal" class="button" @click="navigateTo('/stock')">Stock</v-btn>
      </nav>
    </div>
    <div class="right-section">
      <v-btn variant="tonal" icon class="button" @click="navigateTo('/admin')">
        <v-icon>manage_accounts</v-icon>
      </v-btn>
      <v-btn variant="tonal" icon class="button" @click="logout">
        <v-icon>logout</v-icon>
      </v-btn>
      <v-btn icon class="hamburger-btn" @click="toggleDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </div>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" class="mobile-drawer" absolute>
      <v-list>
        <v-list-item @click="navigateToHome">
          <v-icon>home</v-icon>
          <span>Home</span>
        </v-list-item>
        <v-list-item @click="navigateTo('/products')">
          <v-icon>inventory</v-icon>
          <span>Products</span>
        </v-list-item>
        <v-list-item @click="navigateTo('/stock')">
          <v-icon>store</v-icon>
          <span>Stock</span>
        </v-list-item>
        <v-list-item @click="navigateTo('/admin')">
          <v-icon>manage_accounts</v-icon>
          <span>Admin Panel</span>
        </v-list-item>
        <v-list-item @click="logout">
          <v-icon>logout</v-icon>
          <span>Logout</span>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const drawer = ref(false);

  const navigateToHome = () => {
    router.push('/');
    drawer.value = false;
  };

  const navigateTo = (path: string) => {
    router.push(path);
    drawer.value = false;
  };

  const logout = () => {
    // Mock logout logic
    console.log('User logged out');
    router.push('/login');
    drawer.value = false;
  };

  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
</script>

<style lang="scss" scoped>
  @import '@/styles/colors.scss';

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    height: 64px;
    background-color: $primary;
    color: $white;
  }

  .left-section,
  .tabs,
  .right-section {
    display: flex;
    align-items: center;
  }

  .tabs {
    gap: 16px;
  }

  .button {
    color: $white;

    &:hover {
      color: $accent;
    }
  }

  .hamburger-btn {
    display: none; /* Hidden by default */
    color: $white;

    &:hover {
      color: $accent;
    }
  }

  .mobile-drawer {
    background-color: $primary;
    color: $white;

    .v-list-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px;

      &:hover {
        background-color: $accent;
        color: $white;
      }
    }
  }

  @media (max-width: 768px) {
    .tabs,
    .button:not(.hamburger-btn) {
      display: none; /* Hide buttons on mobile */
    }

    .hamburger-btn {
      display: inline-flex; /* Show hamburger button on mobile */
    }
  }
</style>
