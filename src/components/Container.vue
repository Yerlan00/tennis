<template>
  <div class="container" :class="styleType">
    <template>
      <slot> </slot>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export enum ContainerType {
  GRID = "grid",
  FLEX = "flex",
  FLEX_JUSTIFY_BETWEEN = "flex-justify-between",
}

@Component({
  props: {
    styleType: String as () => ContainerType,
  },
})
export default class ContainerComponent extends Vue {}
</script>

<style scoped lang="scss">
.container {
  width: 1300px;
  margin: 0 auto;
}

.container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.container.flex {
  display: flex;
}

.container.flex-justify-between {
  display: flex;
  justify-content: space-between;
}
</style>
