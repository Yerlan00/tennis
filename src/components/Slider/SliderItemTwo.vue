<template>
  <div class="item">
    <div
      class="item-image-border"
      :style="{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(' + item.image + ')',
      }"
    >
      <h3 class="item-title">{{ item.title }}</h3>
    </div>
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
export default class SliderItemTwoComponent extends Vue {}
</script>

<style scoped lang="scss">
.item {
  border: 1px solid #f7ece1;
  width: 636px;
  height: 330px;
  padding: 20px;
}
.item-image-border {
  width: 586px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  h3 {
    color: #fff;
    text-align: start;
    font-weight: 700;
    font-size: 27px;
    line-height: 140%;
    width: 298px;
  }
}
</style>
