<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h1>Pesquisar registros</h1>
      </div>
      <div class="input-box">
        <div>
          <b-table
            striped
            hover
            bordered
            head-variant="dark"
            class="text-center"
            :items="registers"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(animal)="animalName">
              {{ animalName.value }}
            </template>
            <template #cell(lote)="batchName">
              {{ batchName.value }}
            </template>
            <template #cell(dt_entrada)="inputDate">
              {{ inputDate.value | moment }}
            </template>
            <template #cell(dt_saida)="outputDate">
              {{ outputDate.value | moment }}
            </template>
            <template #cell(ultima_movimentacao)="lastDate">
              {{ lastDate.value | moment }}
            </template>
            <template #cell(ic_bezerro)="calf">
              {{ calf.value == true ? "Sim" : "Não" }}
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
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import DeleteButton from "@/components/TheDeleteButton";
import moment from "moment";
import api from "@/services/api";

export default {
  components: {
    TheNavbar,
    DeleteButton,
  },
  data: () => ({
    perPage: 8,
    currentPage: 1,
    registers: Array,
    totalItems: 0,
    fields: [
      {
        key: "animal",
        label: "Nome do animal",
        sortable: true,
      },
      {
        key: "lote",
        label: "Nome do lote",
        sortable: true,
      },
      {
        key: "dt_entrada",
        label: "Entrada",
        sortable: true,
      },
      {
        key: "dt_saida",
        label: "Saída",
        sortable: true,
      },
      {
        key: "ultima_movimentacao",
        label: "Última movimentação",
        sortable: true,
      },
      {
        key: "ic_bezerro",
        label: "É Bezerro?",
      },
      {
        key: "opcoes",
        label: "Opções",
      },
    ],
  }),
  created() {
    this.getList();
  },
  methods: {
    deleteItem(id) {
      api.delete(`/registers/${id}`).then(
        () => {
          this.getList();
        },
        (err) => console.log(err)
      );
    },

    getList() {
      api.get("/registers").then((value) => {
        this.totalItems = value.data.totalItems;
        this.registers = value.data.registers.map((registers) => ({
          id: registers.id,
          animal: registers.animal.no_animal,
          lote: registers.batch.no_lote,
          dt_entrada: registers.dt_entrada,
          dt_saida: registers.dt_saida,
          ultima_movimentacao: registers.dt_ultima_movimentacao,
          ic_bezerro: registers.ic_bezerro,
        }));
      });
    },
    moment: function () {
      return moment();
    },
  },
  filters: {
    moment: function (date) {
      if (date) {
        return moment(date).format("DD/MMM/YYYY");
      }
    },
  },
};
</script>
