<template>
  <div class="news">
    <NewsItemComponent
      v-for="(item, index) in newsItems"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import NewsItemComponent from "@/components/NewsItem.vue";
import { IPhoto } from "@/types/index";

@Component({
  props: {
    newsItems: {
      type: Array as () => IPhoto[],
      required: true,
      default: [],
    },
  },
  components: {
    ContainerComponent,
    NewsItemComponent,
  },
})
export default class NewsListComponent extends Vue {}
</script>

<style scoped lang="scss">
.news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
  gap: 20px;

  // display: flex;
  // flex-wrap: wrap;
  margin-bottom: 120px;
}
</style>
