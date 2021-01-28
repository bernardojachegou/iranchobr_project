<template>
  <div>
    <TheNavbar />
    <div class="main">
      <TheAlert :dismissCountDown="dismissCountDown" />
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
                <b-form-select
                  v-model="owner"
                  :options="owners"
                ></b-form-select>
              </div>
            </b-form-group>

            <b-form-group
              label="Fazenda:"
              label-for="fazenda"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <div class="form-group">
                <b-form-select
                  v-model="batch"
                  :options="batches"
                ></b-form-select>
              </div>
            </b-form-group>

            <b-form-group
              label="Nome do animal:"
              label-for="nome-animal"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="nome-animal"
                type="text"
                v-model="form.animal_name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Raça:"
              label-for="raca"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="raca"
                type="text"
                v-model="form.ox_breed"
              ></b-form-input>
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
                v-model="form.gender"
              ></b-form-radio-group>
            </b-form-group>

            <b-form-group
              label="Peso:"
              label-for="peso"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="peso"
                type="number"
                v-model="form.weight"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Data de nascimento:"
              label-for="nascimento"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                id="nascimento"
                type="date"
                v-model="form.birthdate"
              ></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
      </div>
      <div>
        <div class="d-flex justify-content-around">
          <b-button variant="dark" size="lg" @click="addAnimal"
            >Cadastrar</b-button
          >
          <BackButton />
        </div>
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
    owner: null,
    owners: [],
    batch: null,
    batches: [],
    form: {
      farm_id: "",
      animal_name: "",
      ox_breed: "",
      gender: "M",
      weight: "",
      birthdate: "",
    },
    dismissCountDown: 0,
  }),
  methods: {
    addAnimal() {
      const form = {
        fk_id_pessoa: this.owner,
        id_fazenda: this.batch,
        no_animal: this.form.animal_name,
        no_raca: this.form.ox_breed,
        sexo: this.form.gender,
        vr_peso: this.form.weight,
        dt_nascimento: this.form.birthdate,
      };

      console.log(form);

      api.post("/animals", form).then(
        () => {
          this.form = {
            farm_id: "",
            animal_name: "",
            ox_breed: "",
            gender: "M",
            weight: "",
            birthdate: "",
          };
          this.dismissCountDown = 3;
        },
        (err) => console.log(err)
      );
    },
  },
  created() {
    api.get("/people").then((value) => {
      this.owners = value.data.map((people) => ({
        value: people.id,
        text: people.no_pessoa,
      }));
    });
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