<template>
  <div class="slider-wrapper">
    <TitleComponent
      :title="title"
      :showControls="true"
      @arrayLeftClickHandler="clickOnleft()"
      @arrayRightClickHandler="clickOnRight()"
      :disable-left="!this.offset"
      :disable-right="this.offset >= this.maxSliderLineWidth"
    />
    <div class="slider-items">
      <div class="slider-items-line" ref="sliderItems">
        <template>
          <slot></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SliderItemComponent from "./SliderItem.vue";
import { ISliderItem } from "@/types/slider";
import TitleComponent from "@/components/Title.vue";

@Component({
  components: {
    SliderItemComponent,
    TitleComponent,
  },
  props: {
    items: {
      type: Array as () => ISliderItem[],
      required: false,
      default: () => [],
    },
    title: {
      type: String,
      default: "Title",
    },
    itemsCountToShow: {
      type: Number,
      default: 1,
    },
    maxItemsLength: {
      type: Number,
      default: 0,
    },
  },
})
export default class SliderListComponent extends Vue {
  offset = 0;
  sliderItemWidth = 0;
  gapCssProp = 0;
  maxSliderLineWidth = 0;

  mounted() {
    const listElement: HTMLElement = this.$refs.sliderItems as HTMLElement;
    console.log("listElement.children.length==>", listElement.children.length);
    console.log("this.offset==>", this.offset);

    this.sliderItemWidth = listElement.children[0].clientWidth;
    const maxItemsLength = this.$props.maxItemsLength;

    this.maxSliderLineWidth =
      this.sliderItemWidth *
        (maxItemsLength - (this.$props.itemsCountToShow - 1)) -
      this.sliderItemWidth;

    // this.maxSliderLineWidth =
    //   this.sliderItemWidth *
    //     (listElement.children.length - (this.$props.itemsCountToShow - 1)) -
    //   this.sliderItemWidth;

    const gapCssProp = window
      .getComputedStyle(listElement, null)
      .getPropertyValue("gap");

    this.gapCssProp = parseInt(gapCssProp);
  }

  clickOnleft() {
    if (!this.offset) {
      return;
    }
    const listElement: HTMLElement = this.$refs.sliderItems as HTMLElement;

    this.offset = this.offset - (this.gapCssProp + this.sliderItemWidth);
    listElement.style.transform = `translateX(${-this.offset}px)`;
  }

  clickOnRight() {
    console.log("clickOnRight");
    console.log("this.offset", this.offset);
    console.log("this.maxSliderLineWidth", this.maxSliderLineWidth);

    if (this.offset >= this.maxSliderLineWidth) {
      return;
    }

    const listElement: HTMLElement = this.$refs.sliderItems as HTMLElement;

    this.offset = this.offset + (this.gapCssProp + this.sliderItemWidth);
    listElement.style.transform = `translateX(${-this.offset}px)`;
  }
}
</script>

<style scoped lang="scss">
.slider-wrapper {
  margin-bottom: 150px;
}
.slider-items {
  overflow: hidden;
}

.slider-items-line {
  transition: 0.3s;
  display: flex;
  gap: 20px;
}
</style>
