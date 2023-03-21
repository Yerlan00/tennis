<template>
  <div class="rule">
    <router-link tag="a" :to="rule.link">
      <h4>{{ numberOfRule }} {{ rule.title }}</h4>
    </router-link>
    <AboutRuleComponent
      v-for="(childRule, index) in rule.children"
      :key="index"
      :rule="childRule"
      :number-of-rule="`${numberOfRule}${index + 1}`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IRule } from "@/types/rule";

@Component({
  props: {
    rule: Object as () => IRule,
    numberOfRule: String,
  },
})
export default class AboutRuleComponent extends Vue {}
</script>

<style scoped lang="scss">
.rule {
  max-width: 340px;
  margin-bottom: 40px;
  a {
    font-size: 21px;
    font-weight: 600;
    color: #333;
    &.router-link-exact-active.router-link-active {
      color: #8d86c9;
      h4 {
        margin-left: 40px;
        transition: 0.3s;
      }
    }
  }
}
.rule > .rule {
  margin-left: 5px;
  color: red;
}
// h4 {
//   font-size: 21px;
//   font-weight: 600;
//   // color: #333333;
// }
</style>
