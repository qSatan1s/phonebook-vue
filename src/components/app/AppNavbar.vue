<template>
  <nav class="navBar #ff9800 orange">
    <div class="navBar__item">
      <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
    </div>
    <div class="navBar__item search">
      <input
        v-model="searchNumber"
        placeholder="Поиск"
        class="inputSearch"
        v-if="search"
        type="text"
      />
      <i @click="search = !search" class="material-icons search-icon">search</i>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    search: false,
    searchNumber: ""
  }),
  watch: {
    async searchNumber(value) {
      await this.$store.dispatch("searchNumber", value);
    }
  }
};
</script>

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
.search {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-top: 5px;
  z-index: 99;
}
.inputSearch {
  background: white !important;
  height: 30px !important;
  border-radius: 5px !important;
  right: 5px;
  border: 0px;
  box-sizing: border-box !important;
  padding: 0 10px !important;
  border-bottom: 0px !important;
  margin: 0 5px !important;
}
</style>
