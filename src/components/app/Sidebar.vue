<template>
  <div>
    <ul id="slide-out" class="sidenav" :class="{ openSidenav: isOpen }">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="https://materializecss.com/images/office.jpg" />
          </div>
          <a href="#user"
            ><img
              class="circle"
              src="https://materializecss.com/images/yuna.jpg"
          /></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"
            ><span class="white-text email">jdandturk@gmail.com</span></a
          >
        </div>
      </li>
      <li>
        <a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a>
      </li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
    <a
      href="#"
      @click="isOpen = !isOpen"
      data-target="slide-out"
      class="sidenav-trigger"
      ><i class="material-icons">menu</i></a
    >
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  data: () => ({
    isOpen: false
  }),
  mounted() {
    var elems = document.querySelectorAll(".sidenav");
    // eslint-disable-next-line
    var instances = M.Sidenav.init(elems, {edge:"left", draggable: true});
  }
};
</script>

<style lang="scss">
.sidenav {
  position: relative;
  width: 200px;
  height: 536px;
  left: 15px;
  top: 0;
  margin: 0;
  transform: translateX(-100%);
  height: 100%;
  height: calc(100% + 60px);
  height: -moz-calc(100%);
  padding-bottom: 60px;
  background-color: #fff;
  z-index: 999;
  overflow-y: auto;
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateX(-105%);
}
</style>
