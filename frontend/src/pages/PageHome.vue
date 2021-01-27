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
          >
            <!-- First request -->
            <template #cell(animal)="animalName">
              {{ animalName.value }}
            </template>
            <template #cell(lote)="batchName">
              {{ batchName.value }}
            </template>
            <!-- Second request -->
            <template #cell(entrada)="inputDate">
              {{ inputDate.value | moment }}
            </template>
            <template #cell(saída)="outputDate">
              {{ outputDate.value | moment }}
            </template>
            <template #cell(Última_movimentação)="lastDate">
              {{ lastDate.value | moment }}
            </template>

            <template #cell(Opções)="row">
              <DeleteButton :row="row" @delete="deleteItem" />
            </template>
          </b-table>
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
    registers: Array,
    animals: Array,
    fields: [
      {
        key: "animal",
        sortable: true,
      },
      {
        key: "lote",
        sortable: true,
      },
      {
        key: "entrada",
        sortable: true,
      },
      {
        key: "saída",
        sortable: true,
      },
      {
        key: "Última_movimentação",
        sortable: true,
      },
      {
        key: "ic_bezerro",
      },
      {
        key: "Opções",
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
        this.registers = value.data.map((registers) => ({
          id: registers.id,
          animal: registers.animal.no_animal,
          lote: registers.batch.no_lote,
          entrada: registers.dt_entrada,
          saída: registers.dt_saida,
          Última_movimentação: registers.dt_ultima_movimentacao,
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
