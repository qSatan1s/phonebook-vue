<template>
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h5 class="modal--title center">
        confirm<i class="warning material-icons">warning</i>
      </h5>
      <p class="center">Вы действительно хотите удалить этот контакт?</p>
    </div>
    <div class="modal-footer" @click="overflow">
      <a
        href="#"
        class="cancelModal btnModal modal-close waves-effect waves-red btn-flat"
        >Отменить</a
      >
      <a
        @click="removeNumber()"
        class="btnModal remove modal-close waves-effect waves-green btn-flat"
        >Уадлить</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data: () => ({
    modal: null
  }),
  mounted() {
    var elems = document.querySelectorAll(".modal");
    this.modal = M.Modal.init(elems, { opacity: 0.5 });
  },
  methods: {
    async removeNumber() {
      try {
        await this.$store.dispatch("removeNumber", this.id);
      } catch (e) {}
    },
    overflow() {
      document.querySelector(".home").style.overflowY = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 300px;
}
.modal--title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
}
.warning {
  color: orange;
  margin: 0 5px;
}
.modal-footer {
  display: flex;
  justify-content: center;
}
.btnModal {
  color: white;
  border-radius: 5px;
  margin: 0 5px !important;
}
.remove {
  background: green;
  &:hover {
    background: rgb(1, 104, 1);
  }
}
.cancelModal {
  background: rgb(182, 4, 4);
  &:hover {
    background: rgb(143, 0, 0);
  }
}
</style>
