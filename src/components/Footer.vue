<template>
  <div class="footer">
    <ContainerComponent :style-type="containerType.FLEX_JUSTIFY_BETWEEN">
      <div class="footer-copyright">2022 © Все права защищены.</div>
      <MenuComponent textColor="#000" />
      <div class="footer-social">
        <a href="https://youtube.com">
          <YouTubeLogoComponent fill="#8D86C9" />
        </a>
        <a href="https://vk.com">
          <VkLogoComponent fill="#8D86C9" />
        </a>
        <a href="https://telegram.com">
          <TelegramLogoComponent fill="#8D86C9" />
        </a>
      </div>
    </ContainerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import MenuComponent from "@/components/Menu.vue";
import { ContainerType } from "@/components/Container.vue";
import YouTubeLogoComponent from "@/components/ui/YouTubeLogo.vue";
import VkLogoComponent from "@/components/ui/VkLogo.vue";
import TelegramLogoComponent from "@/components/ui/TelegramLogo.vue";

@Component({
  components: {
    ContainerComponent,
    MenuComponent,
    YouTubeLogoComponent,
    VkLogoComponent,
    TelegramLogoComponent,
  },
})
export default class FooterComponent extends Vue {
  containerType = ContainerType;
}
</script>

<style scoped lang="scss">
.footer {
  background-color: #f7ece1;
  padding: 30px 0;
  &-social {
    display: flex;
    gap: 20px;
  }
}
</style>
