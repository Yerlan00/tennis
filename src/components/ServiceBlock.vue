<template>
  <div class="service-block">
    <h4 class="service-block__title">{{ serviceBlock.title }}</h4>

    <div class="service-block__subtitle">
      <h4 class="service-block__description">{{ serviceBlock.description }}</h4>
      <a :href="serviceBlock.link">
        <img src="../assets/img/link-more.svg" alt="" />
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IServiceBlock } from "@/types/serviceBlock";

@Component({
  props: {
    serviceBlock: Object as () => IServiceBlock,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.service-block {
  background-color: #8d86c9;
  padding: 35px 49px 35px 35px;
  color: #fff;
  &__title {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
  }
  &__subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
