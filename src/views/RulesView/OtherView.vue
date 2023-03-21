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
      title: "6.1. Прочие положения на территории теннисного корта:",
      description:
        "ТК предоставляет игровое время на основании заявок (брони) Членов клуба с учетом расписания работы корта, проведения соревнований, клубных мероприятий, производства ремонтно-профилактических работ. Бронирование игрового времени осуществляется через администратора ТК. Бронирование может производиться непосредственно в Комплексе, либо по телефону. 3.4 ТК не несет ответственности за сохранение расписания игрового времени за Членом клуба после окончания срока действия абонемента, а также в случае нарушения срока оплаты услуг. 3.5 Абонемент имеют право приобретать только Члены ТК. Приобретение абонементов тренерами запрещено. 3.6. Отмена игрового времени может производится не позднее 24 часов до начала занятия и отыгрываться в течение сезона на равноценном времени, либо, при желании, на более дорогом, с доплатой. Не отмененное вовремя занятие считается состоявшимся и оплачивается по текущему тарифу. 3.7. При проведении соревнований, Клубных мероприятиях, технических неисправностях, не позволяющих эксплуатацию кортов, ТК имеет право производить изменения в расписании. При этом ТК обязуется заблаговременно уведомить Члена клуба по телефону об изменении в расписании, а также предоставить возможность равнозначно компенсировать пропущенное игровое время в удобное для Члена клуба время с учетом занятости кортов. 3.8. Компенсация (обоюдно согласованное равноценное игровое время) для занятий в ТК предоставляется также в случаях:",
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
    }
    &-description {
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      margin-bottom: 25px;
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
