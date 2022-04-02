<template>
  <div>
    <LogoutButton v-if="isAuthenticated" />
    <LoginButton v-else />
  </div>
</template>

<script>
import LoginButton from "@/components/buttons/LoginButton.vue";
import LogoutButton from "@/components/buttons/LogoutButton.vue";
import { useAuth0 } from "@/auth";
import { computed } from "vue";

export default {
  name: "AuthenticationButton",
  components: { LoginButton, LogoutButton },
  setup() {
    const auth0 = useAuth0();

    const isAuthenticated = computed(() => {
      if (!auth0) {
        return null;
      }

      return auth0.isAuthenticated.value;
    });

    return {
      isAuthenticated,
    };
  },
};
</script>
