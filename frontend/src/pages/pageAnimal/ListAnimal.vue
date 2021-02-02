<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de animais</h2>
      </div>
      <div class="input-box">
        <div>
          <b-table
            striped
            hover
            bordered
            head-variant="dark"
            class="text-center"
            :items="animals"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(nome_animal)="animalName">
              {{ animalName.value }}
            </template>
            <template #cell(nome_fazenda)="farmName">
              {{ farmName.value }}
            </template>
            <template #cell(raca)="oxBreed">
              {{ oxBreed.value }}
            </template>
            <template #cell(peso)="animalWeight">
              {{ animalWeight.value }}
            </template>
            <template #cell(opcoes)="row">
              <DeleteButton :row="row" @delete="deleteItem" />
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalItems"
            :per-page="perPage"
            aria-controls="my-table"
          >
          </b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import DeleteButton from "@/components/TheDeleteButton";
import api from "@/services/api";
export default {
  components: {
    TheNavbar,
    DeleteButton,
  },
  data: () => ({
    perPage: 8,
    currentPage: 1,
    totalItems: 0,
    animals: Array,
    fields: [
      {
        label: "Nome do animal",
        key: "nome_animal",
        sortable: true,
      },
      {
        label: "Fazenda",
        key: "nome_fazenda",
        sortable: true,
      },
      {
        label: "Raça",
        key: "raca",
        sortable: true,
      },
      {
        label: "Peso",
        key: "peso",
        sortable: true,
      },
      {
        label: "Opções",
        key: "opcoes",
      },
    ],
  }),
  created() {
    this.getList();
  },
  methods: {
    deleteItem(id) {
      api.delete(`/animals/${id}`).then(
        () => {
          this.getList();
        },
        (err) => console.log(err)
      );
    },
    getList() {
      api.get("/animals").then((value) => {
        this.totalItems = value.data.totalItems;
        this.animals = value.data.registers.map((animals) => ({
          id: animals.id,
          nome_animal: animals.no_animal,
          nome_fazenda: animals.no_fazenda,
          raca: animals.no_raca,
          peso: `${animals.vr_peso}kg`,
        }));
      });
    },
  },
};
</script>

<style scoped>
</style>