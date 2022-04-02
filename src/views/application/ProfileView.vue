<template>
  <div>
    <p class="headline">{{ $t("ProfileView.headline") }}</p>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  head() {
    return {
      title: "this.$t('ProfileView.meta.title')",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this.$t('ProfileView.meta.description')",
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
