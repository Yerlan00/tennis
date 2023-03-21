<template>
  <div class="viewli">
    <template>
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ViewLiComponent extends Vue {}
</script>

<style scoped></style>
