<template>
  <div>
    <NavBar mode="application" />
    <router-view v-if="user"></router-view>
  </div>
</template>
<script>
import NavBar from "@/components/navbars/NavBar";
import { useAuth0 } from "@/auth";
export default {
  components: { NavBar },
  setup() {
    const auth0 = useAuth0();

    const user = auth0 ? auth0.user : null;
    return {
      user,
    };
  },
};
</script>
