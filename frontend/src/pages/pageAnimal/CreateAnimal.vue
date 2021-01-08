<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="input-box">
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Cadastro de animais"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-group
              label="Responsável pelo animal:"
              label-for="responsavel-animal"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Fernando Rafael</option>
                  <option>Hamilton Gabriel</option>
                  <option>Michel Bernardo</option>
                  <option>William Gonçalves</option>
                  <option>Aline Celestina</option>
                </select>
              </div>
            </b-form-group>

            <b-form-group
              label="Fazenda:"
              label-for="fazenda"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="fazenda"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Nome do animal:"
              label-for="nome-animal"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="nome-animal"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Raça:"
              label-for="raca"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="raca"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Sexo do animal:"
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
              label="Peso:"
              label-for="peso"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="peso" type="number"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Data de nascimento:"
              label-for="nascimento"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="nascimento" type="date"></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
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