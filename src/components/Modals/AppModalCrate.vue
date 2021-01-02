<template>
  <div id="modal3" class="modal">
    <div class="modal-content">
      <div class="card-image">
        <img
          :src="require(`@/assets/images/users/Anon-Person.png`)"
          :alt="number.name"
        />
      </div>
      <h5 class="modal--title center">
        Создать
      </h5>
      <div class="input-field">
        <input
          class="center"
          type="text"
          placeholder="имя"
          v-model="name"
          :class="{
            invalid: $v.name.$dirty && !$v.name.required
          }"
        />
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Введите имя</small
        >
      </div>

      <div class="input-field">
        <input
          class="center"
          type="text"
          v-model="numberPhone"
          placeholder="номер"
          :class="{
            invalid:
              ($v.numberPhone.$dirty && !$v.numberPhone.required) ||
              ($v.numberPhone.$dirty && !$v.numberPhone.minLength)
          }"
        />

        <small
          class="helper-text invalid"
          v-if="$v.numberPhone.$dirty && !$v.numberPhone.required"
          >Введите номер телефона</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.numberPhone.$dirty && !$v.numberPhone.minLength"
        >
          Минимальное значение
          {{ $v.numberPhone.$params.minLength.min }}</small
        >
      </div>
    </div>
    <div class="modal-footer">
      <a
        class="cancelModal btnModal modal-close waves-effect waves-red btn-flat"
        >Отменить</a
      >
      <a
        @click="CrateNumber()"
        class="btnModal save waves-effect waves-green btn-flat"
        >Добавить</a
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  props: ["number", "id"],
  computed: mapGetters(["allNumbers"]),
  data: () => ({
    modal: null,
    name: "",
    numberPhone: "",
    loading: false
  }),
  validations: {
    name: { required },
    numberPhone: { required, minLength: minLength(5) }
  },
  mounted() {
    var elems = document.querySelectorAll(".modal");
    this.modal = M.Modal.init(elems, { opacity: 0.5 });
  },
  methods: {
    async CrateNumber() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        phone: this.numberPhone,
        id: this.id
      };
      try {
        await this.$store.dispatch("CrateNumber", formData);
        await this.$store.commit("updateNumber", this.allNumbers);
        this.name = this.numberPhone = "";
        M.Modal.init(document.querySelectorAll(".modal")).close();
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 300px;
  border-radius: 10px;
  max-height: 80%;
}
.modal-content {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.modal--title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
}
.edit {
  color: rgb(0, 183, 255);
  margin: 0 5px;
  text-align: center;
  width: 100%;
  font-size: 40px;
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

.card-image {
  overflow: hidden;
  width: 100px;
  border-radius: 100%;
  max-height: 120px;
  img {
    object-fit: contain;
  }
}
.save {
  background: rgb(0, 151, 0);
  &:hover {
    background: rgb(2, 107, 2) !important;
  }
}
.cancelModal {
  background: rgb(182, 4, 4);
  &:hover {
    background: rgb(143, 0, 0);
  }
}
.helper-text {
  margin: 0;
  padding: 0;
}
.input-field {
  margin: 0;
}
</style>
