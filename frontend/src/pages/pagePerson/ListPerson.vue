<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de pessoas</h2>
      </div>
      <div class="input-box">
        <div>
          <b-table striped hover :items="people"></b-table>
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
    people: Array,
  }),
  created() {
    api.get("/people").then((value) => (this.people = value.data));
  },
};
</script>

<style scoped>
</style>