<template>
  <div>
    <MarketingNavBar />
    <h1>Marketing Layout</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import MarketingNavBar from "@/components/navbars/MarketingNavBar";
export default {
  components: { MarketingNavBar },
};
</script>
