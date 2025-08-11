<template>
  <div class="login-page">
    <BaseForm v-model="model" submit-text="Send" hideButton>
      <BaseCard
        class="login-card"
        title="ShelfWise"
        padding="20px"
        subtitle="Warehouse managment system"
      >
        <div class="mt-8">
          <BaseInput
            v-if="isRegistering"
            v-model="email"
            label="Email"
            :type="InputType.EMAIL"
            :color="colorAccent"
          ></BaseInput>
          <BaseInput
            v-model="username"
            label="Username"
            :type="InputType.INPUT"
            :color="colorAccent"
          ></BaseInput>
          <BaseInput
            v-model="password"
            label="Password"
            :type="InputType.PASSWORD"
            :color="colorAccent"
          ></BaseInput>
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>

        <template #leftActions>
          <SecondaryButton
            :text="loginMode.text"
            :append-icon="loginMode.icon"
            @click="toggleRegisteringView"
          />
        </template>
        <template #rightActions>
          <SecondaryButton text="Send" append-icon="send" @click="handleLogin" />
        </template>
      </BaseCard>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import BaseCard from '@/components/contains/BaseCard.vue';
  import BaseForm from '@/components/form/BaseForm.vue';
  import BaseInput from '@/components/form/BaseInput.vue';
  import { InputType } from '@/components/form/interfaces';
  import SecondaryButton from '@/components/buttons/SecondaryButton.vue';
  import { colorAccent } from '@/utils/consts';

  interface LoginMode {
    icon: string;
    text: string;
  }

  const model = ref();
  const username = ref('');
  const password = ref('');
  const email = ref('');
  const errorMessage = ref<string>();
  const router = useRouter();
  const isRegistering = ref(false);

  const loginMode = computed<LoginMode>(() => {
    if (!isRegistering.value) {
      return {
        icon: 'person_add',
        text: 'Register',
      };
    }

    return {
      icon: 'login',
      text: 'Login',
    };
  });

  const toggleRegisteringView = (): void => {
    isRegistering.value = !isRegistering.value;
  };

  const handleLogin = () => {
    errorMessage.value = undefined;

    if (username.value === 'admin' && password.value === 'admin') {
      router.push('/'); // Forward user to /home
    } else {
      errorMessage.value = 'Invalid username or password. Please try again.';
    }
  };
</script>

<style lang="scss">
  @import '@/styles/colors.scss';

  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .login-card {
    width: 800px;
    max-width: 100%;
    padding: 20px;
  }

  .error-message {
    color: $error;
    text-align: center;
    margin-top: 1rem;
    font-weight: bold;
  }
</style>
