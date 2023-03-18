<template>
  <div id="app">
    <TopbarComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import TopbarComponent from "@/components/Topbar.vue";
import FooterComponent from "@/components/Footer.vue";

@Component({
  components: {
    ContainerComponent,
    TopbarComponent,
    FooterComponent,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss">
@import "./assets/scss/_shared.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
