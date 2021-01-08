<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de pessoas</h2>
      </div>
      <div class="input-box">
        <div>
          <!-- Test API -->
          <div v-for="person in people" :key="person.id">
            <h2>{{ person.no_pessoa }}</h2>
          </div>
          <!-- <b-table striped hover :items="items"></b-table> -->
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