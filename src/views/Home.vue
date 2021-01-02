<template>
  <div class="home">
    <app-sidebar />
    <div class="cardsBlock">
      <div
        class="cardsSortBlock"
        v-for="(FilteNumber, index) in FilteNumbers"
        :key="index"
      >
        <p class="sortAlphabet">
          {{ FilteNumber[FilteNumber.length - 1].name[0] }}
        </p>
        <app-card
          v-for="number in FilteNumber"
          :key="number.id"
          :number="number"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppSidebar from "../components/app/AppSidebar";
import AppCard from "../components/app/AppCard";
export default {
  computed: mapGetters(["allNumbers", "FilteNumbers"]),
  components: { AppSidebar, AppCard }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
.cardsBlock {
  position: absolute;
  top: 60px;
  width: 100%;
}
.sortAlphabet {
  font-weight: bold;
  margin-left: 20px;
}
</style>
