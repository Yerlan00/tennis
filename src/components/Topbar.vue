<template>
  <div id="Topbar">
    <ContainerComponent>
      <div class="topbar">
        <div class="topbar-logo">
          <router-link to="/">
            <img src="../assets/img/logo.svg" alt="" />
          </router-link>
        </div>

        <div class="topbar-menu">
          <MenuComponent />
        </div>

        <div class="topbar-social">
          <a href="https://youtube.com">
            <img src="../assets/img/youtube.svg" alt="" />
          </a>
          <a href="https://vk.com">
            <img src="../assets/img/vk.svg" alt="" />
          </a>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import MenuComponent from "@/components/Menu.vue";

@Component({
  components: {
    ContainerComponent,
    MenuComponent,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
#Topbar {
  border-bottom: 1px solid #ccc;
  position: absolute;
  width: 100%;
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-family: "Montserrat", sans-serif;

  &-menu {
    color: #fff;
    &__list {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
    }
  }
  &-social {
    a {
      margin-left: 20px;
    }
    a:first-child {
      margin-left: 0;
    }
  }
}
</style>
