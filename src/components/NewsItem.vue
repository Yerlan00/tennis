<template>
  <div class="news-item">
    <div class="news-item__image">
      <img :src="item.url" alt="" />
    </div>
    <h4 class="news-item__subtitle">{{ item.thumbnailUrl }}</h4>
    <h3 class="news-item__title">{{ item.title }}</h3>
    <button>Подробнее</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IPhoto } from "@/types/index";

@Component({
  props: {
    item: {
      type: Object as () => IPhoto,
      required: true,
    },
  },
})
export default class NewsItemComponent extends Vue {}
</script>

<style scoped lang="scss">
.news-item {
  padding: 30px 40px;
  width: 416px;
  max-height: 512px;
  border: 1px solid #f7ece1;
  img {
    width: 336px;
    height: 240px;
  }
  .news-item__subtitle {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: 140%;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  .news-item__title {
    font-weight: 600;
    font-size: 21px;
    line-height: 140%;
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    font-weight: 600;
    font-size: 18px;
    background-color: #8d86c9;
    color: #fff;
    border: none;
    cursor: pointer;
  }
}
</style>
