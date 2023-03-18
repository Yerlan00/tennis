<template>
  <div>
    <div class="news-header">
      <h2 class="news-header__title">Новости</h2>
    </div>
    <ContainerComponent :style-type="containerType.GRID">
      <NewsListComponent :newsItems="photos" />
    </ContainerComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import { getPhotos } from "@/api/api";
import { IPhoto } from "@/types/index";
import NewsListComponent from "@/components/NewsList.vue";
import { ContainerType } from "@/components/Container.vue";

@Component({
  components: {
    ContainerComponent,
    NewsListComponent,
  },
})
export default class NewsView extends Vue {
  containerType = ContainerType;
  photos: IPhoto[] = [];

  async mounted() {
    try {
      const response = await getPhotos();
      const data = response.data;

      if (data.length) {
        this.photos = data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped lang="scss">
.news-header {
  margin-bottom: 80px;
  background-image: url("../assets/img/news.jpg");
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 40px;
}
</style>
