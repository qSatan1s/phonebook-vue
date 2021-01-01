<template>
  <form class="autch-card" @submit.prevent="submitHandler">
    <Loader v-if="loading" />
    <div class="card-content" :class="{ blure: loading }">
      <span class="card-title center">
        <i class="material-icons large">contact_phone</i>
      </span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          placeholder="login"
          v-model.trim="login"
          class="center"
          :class="{
            invalid:
              ($v.login.$dirty && !$v.login.required) ||
              ($v.login.$dirty && !$v.login.minLength)
          }"
        />
        <small
          class="helper-text invalid"
          v-if="$v.login.$dirty && !$v.login.required"
          >Введите логин</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          placeholder="password"
          v-model.trim="password"
          class="center"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
        />
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Введите пароль</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Минимальное значение
          {{ $v.password.$params.minLength.min }}</small
        >
      </div>
      <div class="card-action">
        <div>
          <button class="btn waves-effect black auth-submit" type="submit">
            войти
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "login",
  data: () => ({
    login: "",
    password: "",
    loading: false
  }),
  validations: {
    login: { required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.loading = true;
      const formData = {
        email: this.email,
        password: this.password
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss" scoped>
.autch-card {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.auth-submit {
  width: 150px;
}
.input-field {
  margin: 5px 0;
}
.helper-text.invalid {
  color: #f44336;
}
.blure {
  filter: blur(2px);
}
</style>
