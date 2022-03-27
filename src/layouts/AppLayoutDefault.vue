<template>
  <div>
    <nav>
      <router-link to="/">{{ $t("menu.home") }}</router-link> |
      <router-link to="/about">{{ $t("menu.about") }}</router-link> |
      <router-link to="/register">{{ $t("menu.register") }}</router-link> |
      <router-link to="/dashboard">{{ $t("menu.dashboard") }}</router-link>
    </nav>

    <h1>Default Layout</h1>
    <slot />
  </div>
</template>
