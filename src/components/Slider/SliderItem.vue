<template>
  <div class="item">
    <div class="item-image-border">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="item-title">{{ item.title }}</div>
    <div class="item-description">{{ item.description }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ISliderItem } from "@/types/slider";

@Component({
  props: {
    item: {
      type: Object as () => ISliderItem,
      required: true,
    },
  },
})
export default class SliderItemComponent extends Vue {}
</script>

<style scoped lang="scss">
.item {
  &-image-border {
    min-width: 200px;
    border: 1px solid #f7ece1;
    padding-right: 15px;
    padding-left: 15px;

    text-align: center;
    img {
      width: 100%;
    }
  }
  &-title {
    font-size: 21px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  &-description {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    color: #333333;
  }
}
</style>
