<template>
  <div>
    <TheNavbar />
    <div class="main">
      <TheAlert :dismissCountDown="dismissCountDown" />
      <div class="input-box">
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Controle de registros"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- Input -->
            <b-form-group
              label="Animal:"
              label-for="nome-animal"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <div class="form-group">
                <b-form-select v-model="animal" :options="animals">
                </b-form-select>
              </div>
            </b-form-group>

            <!-- Input -->
            <b-form-group
              label="Lote:"
              label-for="lote"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <div class="form-group">
                <b-form-select v-model="batch" :options="batches">
                </b-form-select>
              </div>
            </b-form-group>

            <!-- Input -->
            <b-form-group
              label="Data de entrada:"
              label-for="entrada"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="entrada" type="date" v-model="form.inputDate">
              </b-form-input>
            </b-form-group>

            <!-- Input -->
            <b-form-group
              label="Data de saída:"
              label-for="saida"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="saida" type="date" v-model="form.outputDate">
              </b-form-input>
            </b-form-group>

            <!-- Input -->
            <b-form-group
              label="IC-bezerro:"
              label-for="IC-bezerro"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="IC-bezerro" type="number" v-model="form.calfId">
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
      </div>
      <div class="d-flex justify-content-around">
        <b-button variant="dark" size="lg" @click="addRegister"
          >Cadastrar</b-button
        >
        <BackButton />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import BackButton from "@/components/TheGoBackButton";
import TheAlert from "@/components/TheAlert";
import api from "@/services/api";
export default {
  components: {
    TheNavbar,
    BackButton,
    TheAlert,
  },
  data: () => ({
    animal: null,
    animals: [],
    batch: null,
    batches: [],
    form: {
      inputDate: "",
      outputDate: "",
      lastUpdate: "",
      calfId: "",
    },
    dismissCountDown: 0,
  }),
  methods: {
    addRegister() {
      const form = {
        fk_id_animal: this.animal,
        fk_id_lote: this.batch,
        dt_entrada: this.form.inputDate,
        dt_saida: this.form.outputDate,
        ic_bezerro: this.form.calfId,
      };

      console.log(form);

      api.post("/registers", form).then(
        () => {
          this.form = {
            inputDate: "",
            outputDate: "",
            lastUpdate: "",
            calfId: "",
          };
          this.dismissCountDown = 3;
        },
        (err) => console.log(err)
      );
    },
  },
  created() {
    //get the animals list
    api.get("/animals").then((value) => {
      this.animals = value.data.map((animals) => ({
        value: animals.id,
        text: animals.no_animal,
      }));
    });
    //get the batches list
    api.get("/batches").then((value) => {
      this.batches = value.data.map((batches) => ({
        value: batches.id,
        text: batches.no_lote,
      }));
    });
  },
};
</script>

<style scoped>
</style>