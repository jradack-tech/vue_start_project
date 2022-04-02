<template>
  <button
    type="button"
    class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    @click="logout"
  >
    <span>{{ $t("menu.logout") }} </span>
  </button>
</template>

<script>
import { useAuth0 } from "@/auth";

export default {
  name: "LogoutButton",
  setup() {
    const auth0 = useAuth0();

    const logout = () => {
      if (!auth0) {
        return;
      }

      auth0.logout({
        returnTo: window.location.origin,
      });
    };

    return {
      logout,
    };
  },
};
</script>
