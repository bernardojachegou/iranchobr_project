<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de lotes</h2>
      </div>
      <div class="input-box">
        <div>
          <b-table
            striped
            hover
            bordered
            head-variant="dark"
            class="text-center"
            :items="batches"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(nome_lote)="batchName">
              {{ batchName.value }}
            </template>
            <template #cell(ds_lote)="batchDescription">
              {{ batchDescription.value }}
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
    batches: Array,
    fields: [
      {
        label: "Nome",
        key: "nome_lote",
        sortable: true,
      },
      {
        label: "Descrição",
        key: "ds_lote",
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
      api.delete(`/batches/${id}`).then(
        () => {
          this.getList();
        },
        (err) => console.log(err)
      );
    },
    getList() {
      api.get("/batches").then((value) => {
        this.totalItems = value.data.totalItems;
        this.batches = value.data.registers.map((batches) => ({
          id: batches.id,
          nome_lote: batches.no_lote,
          ds_lote: batches.ds_lote,
        }));
      });
    },
  },
};
</script>

<style scoped>
</style>