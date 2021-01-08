<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h1>Pesquisar registros</h1>
      </div>
      <div class="input-box">
        <TheSearchInput />
      </div>
      <div>
        <b-card
          bg-variant="dark"
          header="Nome do animal - Lote"
          text-variant="white"
          class="text-center"
        >
          <div class="d-flex flex-column align-items-start">
            <b-card-text>Data de entrada: </b-card-text>
            <b-card-text>Data de saída: </b-card-text>
            <b-card-text>Última movimentação: </b-card-text>
            <b-card-text>IC Bezerro: </b-card-text>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheSearchInput from "@/components/TheSearchInput";
export default {
  components: {
    TheNavbar,
    TheSearchInput,
  },
};
</script>
