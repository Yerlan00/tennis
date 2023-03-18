<template>
  <div>
    <header class="about-header">
      <h2 class="about-header__title">О клубе</h2>
    </header>
    <section class="about-photos">
      <ContainerComponent>
        <SliderListComponent
          title="Фото кортов"
          :items-count-toShow="1"
          :max-items-length="cortPhotos.length"
        >
          <div
            class="about-slide-item"
            v-for="(photo, index) in cortPhotos"
            :key="index"
            :style="{
              backgroundImage: 'url(' + photo.backgroundImageUrl + ')',
            }"
          >
            <router-link tag="a" :to="photo.routUrl">{{
              photo.routTitle
            }}</router-link>
          </div>
        </SliderListComponent>
      </ContainerComponent>
    </section>
    <section class="about-board">
      <ContainerComponent>
        <TitleComponent title="О клубе" />
      </ContainerComponent>
      <ContainerComponent>
        <!-- <h2 class="about-board-title">О клубе</h2> -->
        <BoardComponent
          class="board"
          title="Петербургский теннисный клуб имени М.А. Пасечникова"
          :imageUrl="require('../assets/img/left-image.jpg')"
        >
          <p class="board-text">
            Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur
            scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices
            risus viverra. Purus volutpat phasellus viverra vestibulum quis.
            Gravida pretium odio enim ut id tempus semper. Urna cum at in
            iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi
            faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis
            dolor id. Maecenas vivamus tristique donec neque id convallis.
            Feugiat fusce at est at.
          </p>
          <br />
          <p class="board-text">
            Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere
            sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper
            pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut
            lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius
            in eu venenatis.
          </p>
          <br />
          <p class="board-text">
            Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget
            urna magna interdum feugiat ut. In purus rhoncus egestas euismod
            morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis.
            Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum
            suscipit pellentesque risus non.
          </p>

          <div class="some">
            <div
              class="some-item"
              v-for="(item, index) in someItems"
              :key="index"
            >
              <h3 :style="{ '--bgUrl': 'url(' + item.image + ')' }">
                {{ item.title }}
              </h3>
            </div>
          </div>
        </BoardComponent>
      </ContainerComponent>
    </section>

    <section class="rules">
      <ContainerComponent>
        <titleComponent title="Правила" />
      </ContainerComponent>
      <ContainerComponent :style-type="containerType.FLEX">
        <div class="about-sidebar">
          <AboutRuleComponent
            v-for="(rule, index) in rulesList"
            :key="index"
            :rule="rule"
            :number-of-rule="`${index + 1}.`"
          />
        </div>
        <div class="about-views">
          <router-view></router-view>
        </div>
      </ContainerComponent>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContainerComponent from "@/components/Container.vue";
import SliderListComponent from "@/components/Slider/SliderList.vue";
import SliderItemComponent from "@/components/Slider/SliderItem.vue";
import BoardComponent from "@/components/Board.vue";
import TitleComponent from "@/components/Title.vue";
import { ContainerType } from "@/components/Container.vue";
import { IRule } from "@/types/rule";
import AboutRuleComponent from "@/components/About/AboutRule.vue";

@Component({
  components: {
    SliderListComponent,
    ContainerComponent,
    SliderItemComponent,
    BoardComponent,
    TitleComponent,
    AboutRuleComponent,
  },
})
export default class extends Vue {
  containerType = ContainerType;

  cortPhotos = [
    {
      backgroundImageUrl: require("../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
    {
      backgroundImageUrl: require("../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
    {
      backgroundImageUrl: require("../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
    {
      backgroundImageUrl: require("../assets/img/cort-1-bg.jpg"),
      routUrl: "/",
      routTitle: "Летний корт",
    },
  ];
  someItems = [
    {
      title: "Летних грунтовых кортов",
      image: require("../assets/img/7.svg"),
    },
    {
      title: "Зимних корта с покрытием «искусственная трава»",
      image: require("../assets/img/4.svg"),
    },
    {
      title: "Зимних корта с покрытием «hard»",
      image: require("../assets/img/3.svg"),
    },
  ];
  rulesList: IRule[] = [
    {
      title: "Общие положения",
      link: "/about/general",
    },
    {
      title: "Основные определения",
      link: "/about/general-definitions",
      // children: [
      //   {
      //     title: "Вложенные маршруты",
      //     link: "/about/general-definitions/map",
      //   },
      // ],
    },
    {
      title: "Порядок предоставления игрового времени на кортах",
      link: "/about/schedule",
    },
    {
      title: "Оплата услуг",
      link: "/about/pay",
    },
    {
      title: "Правила поведения на территории и кортах",
      link: "/about/rules-on-place",
    },
    {
      title: "Прочие положения",
      link: "/about/other",
    },
  ];
}
</script>

<style scoped lang="scss">
.about-header {
  margin-bottom: 80px;
  background-image: url("../assets/img/about-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 40px;
}
.about-slide-item {
  border: 1px solid red;
  min-width: 100%;
  height: 450px;
  position: relative;
  a {
    position: absolute;
    left: 50px;
    bottom: 50px;
    background-color: #8d86c9;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
  }
}
.about-board {
  margin-bottom: 120px;
  &-title {
    font-weight: 700;
    font-size: 36px;
    color: #333333;
    margin-bottom: 60px;
  }
  .board {
    &-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
    }
  }
  .some {
    margin-top: 58px;
    display: flex;
    justify-content: space-between;

    &-item {
      max-width: 170px;
      padding-left: 46px;

      h3 {
        display: flex;
        position: relative;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        color: #333333;

        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 30px;
          height: 44px;
          background-image: var(--bgUrl);
          background-size: cover;
          left: -46px;
        }
      }
    }
    &-item:nth-child(2) {
      max-width: 234px;
    }
  }
}
</style>
