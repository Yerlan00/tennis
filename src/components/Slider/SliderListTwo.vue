<template>
  <div class="slider-wrapper">
    <TitleComponent
      title="Услуги"
      :showControls="true"
      @arrayLeftClickHandler="clickOnleft()"
      @arrayRightClickHandler="clickOnRight()"
    />
    <div class="slider-items">
      <div class="slider-items-line" ref="sliderItems">
        <!-- <SliderItemTwoComponent
          v-for="(item, index) in items"
          :item="item"
          :key="index"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SliderItemTwoComponent from "./SliderItemTwo.vue";
import { ISliderItem } from "@/types/slider";
import TitleComponent from "@/components/Title.vue";

@Component({
  components: {
    SliderItemTwoComponent,
    TitleComponent,
  },
  props: {
    items: {
      type: Array as () => ISliderItem[],
      required: true,
      default: [],
    },
  },
})
export default class SliderListTwoComponent extends Vue {
  itemWidth = 636;
  offset = 0;

  clickOnleft() {
    const lisElement: HTMLElement = this.$refs.sliderItems as HTMLElement;
    this.offset = this.offset + this.itemWidth;
    lisElement.style.transform = `translateX(${-this.offset}px)`;
  }

  clickOnRight() {
    console.log("clickOn");

    if (!this.offset) {
      return;
    }
    const listElement: HTMLElement = this.$refs.sliderItems as HTMLElement;
    this.offset = this.offset - this.itemWidth;
    listElement.style.transform = `translateX(${-this.offset}px)`;
  }
}
</script>

<style scoped lang="scss">
.slider-wrapper {
  width: 640px;
  margin-bottom: 150px;
}
.slider-items {
  overflow: hidden;
}

.slider-items-line {
  transition: 0.3s;
  display: flex;
  gap: 24px;
}
</style>
