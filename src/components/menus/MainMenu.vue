<template>
  <nav>
    <router-link to="/">{{ $t("menu.home") }}</router-link> |
    <router-link to="/about">{{ $t("menu.about") }}</router-link> |
    <router-link to="/register">{{ $t("menu.register") }}</router-link> |
    <router-link to="/app/dashboard">{{ $t("menu.dashboard") }}</router-link> |
    <select v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style scoped></style>
