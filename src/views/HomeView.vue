<template>
  <div class="home">
    <header class="home-header">
      <ContainerComponent>
        <h1 class="home-header__title">
          Петербургский <br />
          теннисный клуб <br />
          имени М.А. Пасечникова
        </h1>
      </ContainerComponent>
      <ContainerComponent :style-type="containerType.GRID">
        <ServiceBlockComponent
          v-for="(service, index) in services"
          :key="index"
          :service-block="service"
        />
      </ContainerComponent>
    </header>

    <section class="about-blocks">
      <ContainerComponent :style-type="containerType.GRID">
        <AboutBlockComponent
          v-for="(block, index) in aboutBlocks"
          :title="block.title"
          :key="index"
          :bgImage="block.bgImage"
        />
      </ContainerComponent>
    </section>

    <section class="sport-club">
      <ContainerComponent>
        <SportClubComponent />
      </ContainerComponent>
    </section>

    <section class="coaches">
      <ContainerComponent>
        <SliderListComponent
          title="Тренерский состав"
          :itemsCountToShow="6"
          :max-items-length="coaches.length"
        >
          <div class="coaches" v-for="(item, index) in coaches" :key="index">
            <div class="coach-item">
              <div class="coach-item-image-border">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="coach-item-title">
                {{ index + 1 }}:{{ item.title }}
              </div>
              <div class="coach-item-description">{{ item.description }}</div>
            </div>
          </div>
        </SliderListComponent>
      </ContainerComponent>
    </section>
    <section class="prices">
      <ContainerComponent>
        <!-- <PriceLinkComponent>
          <div
            class="price-link"
            v-for="(item, index) in priceLinks"
            :key="index"
          >
					<router-link tag="a" :to="item.routUrl">{{
              photo.routTitle
            }}</router-link>
					</div>
        </PriceLinkComponent> -->
        <SliderListComponent
          title="Фото кортов"
          :items-count-toShow="1"
          :max-items-length="priceItems.length"
        >
          <div
            class="prices-slide-item"
            v-for="(photo, index) in priceItems"
            :key="index"
            :style="{
              backgroundImage: 'url(' + photo.image + ')',
            }"
          >
            <router-link tag="a" :to="photo.routUrl">{{
              photo.routTitle
            }}</router-link>
          </div>
        </SliderListComponent>
      </ContainerComponent>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import ServiceBlockComponent from "@/components/ServiceBlock.vue";
import { IServiceBlock } from "@/types/serviceBlock";
import { ContainerType } from "@/components/Container.vue";
import AboutBlockComponent from "@/components/AboutBlock.vue";
import SportClubComponent from "@/components/SportClub.vue";
import SliderListComponent from "@/components/Slider/SliderList.vue";

@Component({
  components: {
    ContainerComponent,
    ServiceBlockComponent,
    AboutBlockComponent,
    SportClubComponent,
    SliderListComponent,
  },
})
export default class HomeView extends Vue {
  containerType = ContainerType;
  services: IServiceBlock[] = [
    {
      title: "Услуги",
      description: "Аренда корта",
      link: "/",
    },
    {
      title: "Услуги",
      description: "Детский теннис",
      link: "/",
    },
    {
      title: "Услуги",
      description: "Сборы команд",
      link: "/",
    },
    {
      title: "Турниры",
      description: "Расписание",
      link: "/",
    },
  ];
  aboutBlocks = [
    {
      title: "5 летних грунтовых кортов",
      bgImage: require("../assets/img/image-1.jpg"),
    },
    {
      title: "Зал с покрытием “Искусственная трава”",
      bgImage: require("../assets/img/image-2.jpg"),
    },
    {
      title: "Зал с покрытием “Хард”",
      bgImage: require("../assets/img/image-3.jpg"),
    },
  ];
  coaches = [
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item2.jpg"),
      title: "Pretium odio",
      description:
        "Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis.",
    },
    {
      image: require("../assets/img/slider-item3.jpg"),
      title: "Aliquet consectetur",
      description: "Id sapien sed nibh fermentum massa posuere ipsum. Diam in.",
    },
    {
      image: require("../assets/img/slider-item4.jpg"),
      title: "Blandit augue",
      description:
        "Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel diam eros.",
    },
    {
      image: require("../assets/img/slider-item5.jpg"),
      title: "Lorem lacus",
      description:
        "Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus.",
    },
    {
      image: require("../assets/img/slider-item6.jpg"),
      title: "Sed erat",
      description: "Quis ullamcorper pretium lacus risus tellus dolor etiam. ",
    },
    {
      image: require("../assets/img/slider-item6.jpg"),
      title: "Sed erat",
      description: "Quis ullamcorper pretium lacus risus tellus dolor etiam. ",
    },
    {
      image: require("../assets/img/slider-item6.jpg"),
      title: "Sed erat",
      description: "Quis ullamcorper pretium lacus risus tellus dolor etiam. ",
    },
    {
      image: require("../assets/img/slider-item6.jpg"),
      title: "Sed erat",
      description: "Quis ullamcorper pretium lacus risus tellus dolor etiam. ",
    },
  ];
  priceItems = [
    {
      image: require("../assets/img/price-image.jpg"),
      routUrl: "/",
      routTitle: "Уютное кафе",
    },
    {
      image: require("../assets/img/price-image.jpg"),
      routUrl: "/",
      routTitle: "Уютное кафе",
    },
    {
      image: require("../assets/img/price-image.jpg"),
      routUrl: "/",
      routTitle: "Уютное кафе",
    },
  ];
  // priceLinks = [
  //   {
  //     routUrl: "/",
  //     routTitle: "Зимний сезон 2021-2022",
  //   },
  //   {
  //     routUrl: "/",
  //     routTitle: "Абонементы",
  //   },
  //   {
  //     routUrl: "/",
  //     routTitle: "Скидки",
  //   },
  //   {
  //     routUrl: "/",
  //     routTitle: "Дополнительные услуги",
  //   },
  // ];
}
</script>

<style scoped lang="scss">
.home-header {
  margin-bottom: 150px;
  background-image: url("../assets/img/header-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__title {
    color: #fff;
    font-size: 40px;
    font-weight: bold;
  }
}

.sport-club {
  margin-top: 150px;
  margin-bottom: 150px;
}

.coach-item {
  &-image-border {
    min-width: 200px;
    border: 1px solid #f7ece1;
    padding-right: 15px;
    padding-left: 15px;

    text-align: center;
    img {
      width: 100%;
    }
  }
  &-title {
    font-size: 21px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  &-description {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    color: #333333;
  }
}
.prices-slide-item {
  border: 1px solid #f7ece1;
  // padding: 5px;
  min-width: 100%;
  height: 450px;
  position: relative;
  a {
    position: absolute;
    left: 50px;
    bottom: 50px;
    // background-color: #8d86c9;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
  }
}
// 	.price-link {

// 	}
// 	.price-link:
// }
</style>
