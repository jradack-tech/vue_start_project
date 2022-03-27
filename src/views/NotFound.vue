<template>
  <div>
    <p class="headline">{{ $t("NotFound.headline") }}</p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  head() {
    return {
      title: "this.$t('NotFound.meta.title')",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this.$t('NotFound.meta.description')",
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
