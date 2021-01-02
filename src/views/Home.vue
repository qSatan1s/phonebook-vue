<template>
  <div class="home">
    <app-sidebar />
    <div class="cardsBlock" v-if="allNumbers.length > 0">
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
          @remove="removeContact(number.id)"
          @edit="editContact(number)"
          :number="number"
          :image="avatars[number.id]"
        />
      </div>
    </div>
    <div class="noContact" v-else>
      <span>Добавить контакт</span>
    </div>
    <app-modal-remove :id="id" />
    <app-modal-edit :number="number" :image="avatars[id]" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppSidebar from "../components/app/AppSidebar";
import AppModalRemove from "../components/app/AppModalRemove";
import AppModalEdit from "../components/app/AppModalEdit";
import AppCard from "../components/app/AppCard";
export default {
  data: () => ({
    id: 0,
    number: {},
    avatars: [
      "qSatan1s.jpg",
      "n8hrt.jpg",
      "A1.jpg",
      "13.jpg",
      "2.jpg",
      "3.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "kl.jpg",
      "15.jpg",
      "A2.jpg"
    ]
  }),
  computed: mapGetters(["allNumbers", "FilteNumbers"]),
  components: { AppSidebar, AppCard, AppModalRemove, AppModalEdit },
  methods: {
    removeContact(id) {
      document.querySelector(".home").style.overflowY = "hidden";
      this.id = id;
    },
    editContact(number) {
      this.number = number;
      this.id = number.id;
    }
  }
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
.noContact {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 70px;
  margin: auto;
}
</style>
