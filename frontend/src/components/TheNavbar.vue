<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ name: 'Home' }">Ícone aqui</router-link>
        </b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Cadastrar" right>
          <b-dropdown-item>
            <router-link :to="{ name: 'CreateRegister' }">
              Controle (Registro)
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'CreateAnimal' }">Animais</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'CreatePerson' }">Pessoas</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="{ name: 'CreateBatch' }">Lotes</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Listar" right>
          <b-dropdown-item
            ><router-link :to="{ name: 'ListAnimal' }"
              >Animais</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link :to="{ name: 'ListPerson' }"
              >Pessoas</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link :to="{ name: 'ListBatch' }"
              >Lotes</router-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped>
</style>