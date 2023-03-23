<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start">
      <NavbarMobile />
      <img class="w-12 hidden lg:block" src="~/assets/img/unifr-logo.png" alt="Unifr logo" />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        NAFO
      </NuxtLink>
      <NavbarMenu class="hidden lg:inline-flex" />
    </div>
    <div class="navbar-end">
      <!-- <NavbarTheme /> -->
      <label for="main-drawer" class="btn drawer-button lg:hidden">Filtres</label>
    </div>
  </div>
</template>