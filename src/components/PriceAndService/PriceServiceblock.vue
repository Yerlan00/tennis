<template>
  <div class="price-block">
    <div class="price-block-left">
      <TitleComponent title="Тренерский состав" />
      <PriceButtonComponent
        v-for="(item, index) in buttonItems"
        :key="index"
        :buttonUrl="item.buttonUrl"
        :buttonTitle="item.buttonTitle"
        :buttonImage="item.buttonImage"
      />
    </div>

    <SliderListComponent
      class="price-block-right"
      title="Фото кортов"
      :items-count-toShow="1"
      :max-items-length="sliderItems.length"
    >
      <div
        class="about-slide-item"
        v-for="(photo, index) in sliderItems"
        :key="index"
      >
        <div
          class="about-slide-item-img"
          :style="{
            backgroundImage: 'url(' + photo.image + ')',
          }"
        >
          <router-link tag="a" :to="photo.routUrl">{{
            photo.routTitle
          }}</router-link>
        </div>
      </div>
    </SliderListComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SliderListComponent from "@/components/Slider/SliderList.vue";
import PriceButtonComponent from "@/components/PriceAndService/PriceButton.vue";
import TitleComponent from "@/components/Title.vue";

@Component({
  components: {
    SliderListComponent,
    PriceButtonComponent,
    TitleComponent,
  },
})
export default class PriceServiceComponent extends Vue {
  sliderItems = [
    {
      image: require("../../assets/img/price-image.jpg"),
      routUrl: "/",
      routTitle: "Уютное кафе",
    },
    {
      image: require("../../assets/img/price-image.jpg"),
      routUrl: "/",
      routTitle: "Уютное кафе",
    },
    {
      image: require("../../assets/img/price-image.jpg"),
      routUrl: "/",
      routTitle: "Уютное кафе",
    },
  ];
  cortPhotos = [
    {
      backgroundImageUrl: require("../../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
    {
      backgroundImageUrl: require("../../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
    {
      backgroundImageUrl: require("../../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
    {
      backgroundImageUrl: require("../../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
    {
      backgroundImageUrl: require("../../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
  ];
  buttonItems = [
    {
      buttonUrl: "/about/general",
      buttonTitle: "Зимний сезон 2021-2022",
      buttonImage: require("../../assets/img/arrow-left.svg"),
    },
    {
      buttonUrl: "/about/rules-on-place",
      buttonTitle: "Абонементы",
      buttonImage: require("../../assets/img/arrow-left.svg"),
    },
    {
      buttonUrl: "/about/pay",
      buttonTitle: "Скидки",
      buttonImage: require("../../assets/img/arrow-left.svg"),
    },
    {
      buttonUrl: "/about/other",
      buttonTitle: "Дополнительные услуги",
      buttonImage: require("../../assets/img/arrow-left.svg"),
    },
  ];
}
</script>

<style scoped lang="scss">
.price-block {
  display: flex;
  justify-content: space-between;

  &-left {
    width: 526px;
    height: 455px;
  }
  &-right {
    width: 636px;
    height: 455px;
  }
  .about-slide-item {
    border: 1px solid #f7ece1;
    min-width: 632px;
    height: 330px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    .about-slide-item-img {
      min-width: 100%;
      height: 270px;
    }
    a {
      position: absolute;
      left: 50px;
      bottom: 50px;
      padding: 10px 20px;
      font-weight: 600;
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>
