<template>
  <div>
    <p class="headline">{{ $t("dashboard.headline") }}</p>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  head() {
    return {
      title: "this.$t('dashboard.meta.title')",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this.$t('dashboard.meta.description')",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fullwidth {
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}
</style>
