<template>
  <div class="general-view">
    <ViewLiComponent>
      <div class="general" v-for="(item, index) in itemsList" :key="index">
        <h4 class="general-title">
          {{ item.title }}
        </h4>
        <p class="general-description">{{ item.description }}</p>
        <ul class="general-list">
          <li v-for="(el, index) in item.subTitles" :key="index">{{ el }}</li>
        </ul>
      </div>
    </ViewLiComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { IRule } from "@/types/rule";
import ViewLiComponent from "@/components/About/ViewLi.vue";

@Component({
  components: {
    ViewLiComponent,
  },
})
export default class GeneralView extends Vue {
  itemsList = [
    {
      title: "1.1. Общие положения предоставляет:",
      description: "",
      subTitles: {
        subOne: "Разовое посещение;",
        subTwo: "Абонементы с фиксированным временем;",
        subThree: "Абонементы на 30 и 50 часов;",
        subFour: "Индивидуальные занятия с тренером;",
        subFive: "«Клуб любителей тенниса»;",
        subSix: "Детские группы разных возрастов и уровня подготовки;",
        subSeven: "Взрослые группы",
      },
    },
    {
      title: "1.2. Минимальное время:",
      description: "",
      subTitles: {
        subOne: "Разового посещения — 60 минут;",
        subTwo: "Разового посещения на летних кортах — 55 минут;",
        subThree: "Абонемента — 30 часов;",
        subFour:
          "Занятия с тренером в группах (детских/взрослых) — согласно действующего расписания групп.",
      },
    },
    {
      title: "1.3. Игровое время на основании заявок (брони)",
      description: "",
      subTitles: {
        subOne:
          "когда Член клуба заблаговременно (не менее суток) известил администратора ТК о невозможности посещения занятия;",
        subTwo:
          "неблагоприятных погодных условий для игры на открытых кортах, и невозможности предоставления закрытой площадки;",
      },
    },
  ];
}
</script>

<style scoped lang="scss">
.general-view {
  max-width: 886px;
  max-height: 950px;
  color: #333333;
  padding-left: 120px;
  .general {
    &-title {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 25px;
      transition: 0.5s;
    }
    &-description {
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      margin-bottom: 25px;
      transition: 0.5s;
    }
    &-list {
      margin-bottom: 40px;
      padding-left: 30px;
      li {
        font-size: 14px;
        position: relative;
        margin-bottom: 20px;
      }
      li:before {
        content: "";
        display: block;
        width: 15px;
        height: 3px;
        background-color: #8d86c9;
        position: absolute;
        top: 7px;
        left: -30px;
        z-index: 2;
      }
    }
  }
}
</style>
