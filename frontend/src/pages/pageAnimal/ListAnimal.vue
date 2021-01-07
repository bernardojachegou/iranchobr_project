<template>
  <div>
    <TheNavbar />
    <div class="d-flex justify-content-center">
      <h2>Listagem de animais</h2>
    </div>
    <div>
      <b-table striped hover :items="items"></b-table>
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
          nome: "Blob",
          raça: "Dickerson",
          Detalhes: ">>Botão<<",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>