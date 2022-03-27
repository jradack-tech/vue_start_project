<template>
  <div>
    <MainMenu />
    <h1>Application Layout</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import MainMenu from "@/components/menus/MainMenu";
export default {
  components: { MainMenu },
};
</script>
