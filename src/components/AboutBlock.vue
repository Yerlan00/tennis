<template>
  <div class="abot-block-wrapper">
    <div
      class="abot-block"
      :style="{
        width: '376px',
        height: '450px',
        backgroundImage: 'url(' + bgImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <h3 class="abot-block__title">
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: String,
    bgImage: String,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.abot-block-wrapper {
  width: 416px;
  height: 500px;
  border: 1px solid rgba(172, 255, 47, 0.345);
  padding: 25px 20px;
}
.abot-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
  // text-align: center;
  // padding: 334px 72px 40px 72px;

  h3 {
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 27px;
    line-height: 140%;
    width: 298px;
  }
}
</style>
