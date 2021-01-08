<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de lotes</h2>
      </div>
      <div class="input-box">
        <div>
          <b-table striped hover :items="batches"></b-table>
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
    batches: Array,
  }),
  created() {
    api.get("/batches").then((value) => (this.batches = value.data));
  },
};
</script>

<style scoped>
</style>