<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de pessoas</h2>
      </div>
      <div class="input-box">
        <div>
          <b-table striped hover :items="items"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          nome: "Animais de grande porte",
          descrição: "Animais da raça x",
        },
        {
          id: 1,
          nome: "Animais de grande porte",
          descrição: "Animais da raça x",
        },
        {
          id: 1,
          nome: "Animais de grande porte",
          descrição: "Animais da raça x",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>