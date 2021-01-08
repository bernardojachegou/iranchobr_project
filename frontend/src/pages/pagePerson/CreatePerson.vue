<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="input-box">
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Cadastro de pessoas"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-group
              label="Nome:"
              label-for="nome"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="nome"></b-form-input>
            </b-form-group>

            <b-form-group
              label="E-mail:"
              label-for="email"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="email" type="email"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Endereço:"
              label-for="endereco"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="endereco"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Sexo:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-0"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio-group
                class="pt-2"
                :options="['M', 'F']"
                :aria-describedby="ariaDescribedby"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              label="IC Ativo:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-0"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio-group
                class="pt-2"
                :options="['Sim', 'Não']"
                :aria-describedby="ariaDescribedby"
              ></b-form-radio-group>
            </b-form-group>
          </b-form-group>
        </b-card>
      </div>
      <div class="d-flex justify-content-around">
        <b-button variant="dark" size="lg">Cadastrar</b-button>
        <b-button variant="dark" size="lg">Voltar</b-button>
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