<template>
  <div class="price">
    <h2 class="price-title">{{ title }}</h2>

    <button class="price-btn">
      <router-link tag="a" :to="buttonUrl">
        {{ buttonTitle }}
      </router-link>
      <img class="price-btn__image" :src="buttonImage" :alt="buttonTitle" />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    title: String,
    buttonUrl: String,
    buttonTitle: String,
    buttonImage: String,
  },
})
export default class PriceButtonComponent extends Vue {}
</script>

<style scoped lang="scss">
.price {
  &-btn {
    width: 526px;
    height: 60px;
    margin-bottom: 30px;
    padding: 10px 30px;
    background-color: #8d86c9;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 21px;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      padding-right: 200px;
    }
    a {
      color: #fff;
    }
  }
}
</style>
