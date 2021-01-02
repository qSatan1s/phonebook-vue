<template>
  <div class="#42a5f5 blue lighten-1 empty-layout">
    <div class="card card-layout">
      <nav class="nav black">
        <span class="nav--title">testphonebook</span>
        <a class="nav--link" target="_blank" href="https://github.com/qSatan1s">
          <i class="material-icons right">code</i>repository
        </a>
      </nav>
      <AppNavbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/app/AppNavbar";
export default {
  components: { AppNavbar }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.empty-layout {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 5rem;
  height: 100vh;
}

.card-layout {
  width: 350px;
  height: 600px;
  border-radius: 10px;
  position: relative;
  display: block;
  overflow-x: hidden;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  text-transform: uppercase;
}
.nav--link {
  display: flex;
  align-items: center;
  .material-icons {
    margin: 0 5px;
  }
}
</style>
