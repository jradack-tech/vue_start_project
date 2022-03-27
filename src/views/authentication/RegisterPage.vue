<template>
  <v-container>
    <v-row>
      <v-col class="fullwidth">
        <p class="headline">{{ $t("Register.headline") }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegisterPage",
  head() {
    return {
      title: "this.$t('Register.meta.title')",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this.$t('Register.meta.description')",
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
