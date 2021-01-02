<template>
  <ul id="slide-out" class="sidenav openSidenav">
    <li>
      <div class="user-view">
        <div class="background">
          <img src="../../assets/images/background.jpg" />
        </div>
        <a href="#user" class="imageUser"
          ><img class="circle " src="@/assets/images/users/qSatan1s.jpg"
        /></a>
        <a href="#name"
          ><span class="white-text name center">Kirill Bashlykov</span></a
        >
        <a href="#email"
          ><span class="white-text email center">qSatan1s@yandex.ru</span></a
        >
      </div>
    </li>
    <li>
      <router-link to="/" class="waves-effect">
        <i class="material-icons">account_box</i>Contacts
      </router-link>
    </li>
    <li>
      <a class="pointer modal-trigger" data-target="modal3">
        <i class="material-icons">add_to_photos</i>Add Contact
      </a>
    </li>
    <li @click="logout">
      <a class="waves-effect">
        <i class="material-icons">keyboard_return</i>Logout
      </a>
    </li>
  </ul>
</template>

<script>
import M from "materialize-css";
export default {
  data: () => ({
    instances: null
  }),
  mounted() {
    var elems = document.querySelector(".sidenav");
    this.instances = M.Sidenav.init(elems, { edge: "left", draggable: true });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
      return this.instances.close();
    }
  }
};
</script>

<style lang="scss">
.openSidenav {
  position: relative !important;
  width: 200px !important;
  height: 536px !important;
  padding-bottom: 0 !important;
}
.sideNav {
  height: 40px;
}
.imageUser {
  width: 100%;
  display: flex;
  justify-content: center;
}
.pointer {
  cursor: pointer;
}
</style>
