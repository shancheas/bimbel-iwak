<template>
  <div class="main-content bg-primary">
    <!-- Navbar -->
    <base-nav
      class="navbar-top navbar-horizontal navbar-dark"
      containerClasses="px-4 container"
      expand
    >
      <router-link slot="brand" class="navbar-brand" to="/">
        <img src="img/brand/logo-h.png" style="height: 70px" />
      </router-link>
    </base-nav>
    <!-- Header -->
    <div class="header py-7 py-lg-8"></div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <slide-y-up-transition mode="out-in" origin="center top">
        <router-view></router-view>
      </slide-y-up-transition>
    </div>
    <footer class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              Copyright Tryout Online &copy; {{year}}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "auth-layout",
  components: {
    SlideYUpTransition
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false
    };
  }
};
</script>
<style>
</style>
