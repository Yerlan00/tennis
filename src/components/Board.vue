<template>
  <div class="board">
    <div class="right-info" :style="{ '--bgUrl': 'url(' + imageUrl + ')' }">
      <div class="right-info-title">{{ title }}</div>
      <template>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Title",
    },
  },
})
export default class BoardComponent extends Vue {}
</script>

<style scoped lang="scss">
.board {
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.right-info {
  padding-top: 70px;
  padding-right: 60px;
  padding-bottom: 93px;
  padding-left: 146px;
  position: relative;
  background-color: #f7ece1;
  max-width: 856px;
  height: 654px;
  &::before {
    content: "";
    display: block;
    width: 526px;
    height: 514px;
    position: absolute;
    background-image: var(--bgUrl);
    left: -51.6%;
  }
  .right-info-title {
    font-size: 36px;
    font-weight: 700;
    font-size: 36px;
    line-height: 140%;
    color: #333333;
    margin-bottom: 40px;
  }
}
</style>
