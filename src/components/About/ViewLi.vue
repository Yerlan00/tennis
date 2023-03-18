<template>
  <div class="viewli">
    <template>
      <slot></slot>
    </template>
    <!-- <h4 class="viewli-title">
      {{ title }}
    </h4>
    <p>{{ text }}</p>
    <ul>
      <li>{{ subTitleOne }}</li>
      <li>{{ subTitleOn }}</li>
      <li>{{ subTitleO }}</li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
// ({
// props: {
//   title: String,
//   subTitleOne: {
//     type: String,
//     required: false,
//   },
//   subTitleOn: {
//     type: String,
//     required: false,
//   },
//   subTitleO: {
//     type: String,
//     required: false,
//   },
//   text: {
//     type: String,
//     required: false,
//   },
// },
// })
export default class ViewLiComponent extends Vue {}
</script>

<style scoped></style>
