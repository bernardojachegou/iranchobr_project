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
          nome: "Fernando",
          email: "fernando@gmail.com",
          endereço: "Rua Manoel Fernandes",
          Ver_detalhes: ">>Botão<<",
        },
        {
          nome: "Fernando",
          email: "fernando@gmail.com",
          endereço: "Rua Manoel Fernandes",
          Ver_detalhes: ">>Botão<<",
        },
        {
          nome: "Fernando",
          email: "fernando@gmail.com",
          endereço: "Rua Manoel Fernandes",
          Ver_detalhes: ">>Botão<<",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>