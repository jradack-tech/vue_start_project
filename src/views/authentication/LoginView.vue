<template>
  <H1>Login Page</H1>
</template>

<script>
export default {
  name: "LoginView",
  head() {
    return {
      title: "this.$t('Login.meta.title')",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "this.$t('Login.meta.description')",
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
