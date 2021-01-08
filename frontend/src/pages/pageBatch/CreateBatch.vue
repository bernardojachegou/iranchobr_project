<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="input-box">
        <div>
          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label="Cadastro de lotes"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-group
                label="Nome do lote:"
                label-for="lote"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input id="lote"></b-form-input>
              </b-form-group>

              <b-form-group
                label="Descrição do lote:"
                label-for="descricao-lote"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-textarea id="descricao-lote"></b-form-textarea>
              </b-form-group>
            </b-form-group>
          </b-card>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-around">
          <b-button variant="dark" size="lg">Cadastrar</b-button>
          <b-button variant="dark" size="lg">Voltar</b-button>
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
};
</script>

<style scoped>
</style>