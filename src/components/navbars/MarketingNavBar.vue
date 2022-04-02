<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <NavLogo />
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <NavBarButton label="menu.home" to="/" />
            <NavBarButton label="menu.about" to="/about" />
            <NavBarButton label="menu.dashboard" to="/app/dashboard" />
          </div>
        </div>
        <AuthNavBar />
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <MobileNavBarButton label="menu.home" to="/" />
        <MobileNavBarButton label="menu.about" to="/about" />
        <MobileNavBarButton label="menu.dashboard" to="/app/dashboard" />
      </div>
      <MobileAuthNavBar />
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import NavBarButton from "@/components/buttons/NavBarButton";
import MobileNavBarButton from "@/components/buttons/MobileNavBarButton";
import AuthNavBar from "@/components/navbars/AuthNavBar";
import MobileAuthNavBar from "@/components/navbars/MobileAuthNavBar";
import NavLogo from "@/components/navbars/NavLogo";

export default {
  name: "MarketingNavBar",
  components: {
    NavLogo,
    AuthNavBar,
    MobileAuthNavBar,
    NavBarButton,
    MobileNavBarButton,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
};
</script>
