<template>
  <div class="cardPhone col s12">
    <div class="card horizontal">
      <div class="card-image">
        <img src="../../assets/images/users/qSatan1s.jpg" :alt="number.name" />
      </div>
      <div class="card-stacked">
        <div class="card-action card-info">
          <a class=" card-name">{{ number.name }}</a>
        </div>
        <div class="card-btns">
          <a
            @click="editNumber(number.id)"
            class="btn btn-floating btn-large waves-effect waves-light blue"
            ><i class="material-icons">edit</i></a
          >
          <a
            @click.prevent="$emit('remove')"
            data-target="modal1"
            class="btn btn-floating btn-large waves-effect waves-light red modal-trigger"
            ><i class="material-icons">delete</i></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["number"],
  methods: {
    editNumber(id) {
      document.querySelector(".home").style.overflowY = "hidden";
      console.log(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px 0;
  height: 60px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.card-action {
  display: flex;
  flex-flow: column;
  float: left;
  padding: 16px 10px !important;
}

.card-image {
  overflow: hidden;
  object-fit: contain;
  min-width: 50px;
  width: 50px;
  border-radius: 100%;
}
.card-stacked {
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between;
}

.card-name {
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;
  cursor: pointer;
  text-transform: capitalize;
}
.card-info {
  width: 180px;
}
.card-btns {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.btn {
  margin: 0 5px;
  width: 32px !important;
  height: 32px !important;
  display: flex;
  align-items: center;
}
</style>
