<template>
  <div class="home">
    <app-sidebar />
    <div class="cardsBlock" v-if="allNumbers.length > 0">
      <div
        class="cardsSortBlock"
        v-for="(FilteNumber, index) in FilteNumbers"
        :key="`${index}_${allNumbers.length}`"
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
      <a
        data-target="modal3"
        class="btn-floating btn-large waves-effect waves-light red modal-trigger"
        ><i class="material-icons">add</i></a
      >
    </div>
    <app-modal-remove :id="id" />
    <app-modal-edit :number="number" :image="avatars[id]" />
    <app-modal-create :number="number" :id="allNumbers.length + 1" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppSidebar from "../components/app/AppSidebar";
import AppCard from "../components/app/AppCard";

import AppModalRemove from "../components/Modals/AppModalRemove";
import AppModalEdit from "../components/Modals/AppModalEdit";
import AppModalCreate from "../components/Modals/AppModalCrate";
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
      "A2.jpg",
      "A.jpg",
      "A3.jpg",
      "A4.jpg"
    ]
  }),
  computed: mapGetters(["allNumbers", "FilteNumbers"]),
  components: {
    AppSidebar,
    AppCard,
    AppModalRemove,
    AppModalEdit,
    AppModalCreate
  },
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
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
