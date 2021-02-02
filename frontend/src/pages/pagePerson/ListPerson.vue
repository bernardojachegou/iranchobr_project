<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h2>Listagem de pessoas</h2>
      </div>
      <div class="input-box">
        <div>
          <b-table
            striped
            hover
            bordered
            head-variant="dark"
            class="text-center"
            :items="people"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(nome)="personName">
              {{ personName.value }}
            </template>
            <template #cell(email)="email">
              {{ email.value }}
            </template>
            <template #cell(endereco)="address">
              {{ address.value }}
            </template>
            <template #cell(ic_ativo)="isActive">
              {{ isActive.value == 1 ? "Sim" : "Não" }}
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
    people: Array,
    fields: [
      {
        label: "Nome",
        key: "nome",
        sortable: true,
      },
      {
        label: "E-mail",
        key: "email",
        sortable: true,
      },
      {
        label: "Endereço",
        key: "endereco",
        sortable: true,
      },
      {
        label: "Ativo?",
        key: "ic_ativo",
        sortable: true,
      },
      {
        label: "Opcões",
        key: "opcoes",
      },
    ],
  }),
  created() {
    this.getList();
  },
  methods: {
    deleteItem(id) {
      api.delete(`/people/${id}`).then(
        () => {
          this.getList();
        },
        (err) => console.log(err)
      );
    },
    getList() {
      api.get("/people").then((value) => {
        this.totalItems = value.data.totalItems;
        this.people = value.data.registers.map((people) => ({
          id: people.id,
          nome: people.no_pessoa,
          email: people.no_email,
          endereco: people.endereco,
          ic_ativo: people.ic_ativo,
        }));
      });
    },
  },
};
</script>

<style scoped>
</style>