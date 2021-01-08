<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de animais</h2>
      </div>
      <div class="input-box">
        <div>
          <b-table striped hover :items="animals"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import api from "@/services/api";
export default {
  components: {
    TheNavbar,
  },
  data: () => ({
    animals: Array,
  }),
  created() {
    api.get("/animals").then((value) => (this.animals = value.data));
  },
};
</script>

<style scoped>
</style>