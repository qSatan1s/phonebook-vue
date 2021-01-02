<template>
  <nav class="navBar #ff9800 orange">
    <div class="navBar__item">
      <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
    </div>
    <div class="navBar__item">
      <i class="material-icons">search</i>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 350px;
  justify-content: space-between;
  position: absolute;
  padding: 0 10px;
}

.sidenav-trigger {
  position: absolute;
  display: block !important;
  color: white;
  margin: 0 !important;
  z-index: 99;
}
</style>
