<template>
  <div class="title-wrapper">
    <h3 class="title">{{ title }}</h3>

    <div class="title-controls" v-if="showControls">
      <button :disabled="disableLeft" @click="arrowLeftClickHandler()">
        <img src="../assets/img/arrow-left.svg" alt="" />
      </button>
      <button :disabled="disableRight" @click="arrowRightClickHandler()">
        <img src="../assets/img/arrow-right.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: {
      type: String,
      required: true,
    },
    showControls: {
      type: Boolean,
      required: false,
    },
    disableLeft: {
      type: Boolean,
      default: false,
    },
    disableRight: {
      type: Boolean,
      default: false,
    },
  },
})
export default class TitleComponent extends Vue {
  arrowLeftClickHandler() {
    this.$emit("arrayLeftClickHandler");
  }
  arrowRightClickHandler() {
    this.$emit("arrayRightClickHandler");
  }
}
</script>

<style scoped lang="scss">
.title-wrapper {
  margin-bottom: 75px;
  display: flex;
  justify-content: space-between;
  .title {
    font-weight: 700;
    font-size: 36px;
    color: #333333;
  }

  .title-controls {
    display: flex;
    button {
      border: none;
      background-color: #8d86c9;
      width: 45px;
      height: 45px;
      margin-left: 15px;
      cursor: pointer;
    }
    button[disabled] {
      opacity: 0.5;
    }
  }
}
</style>
