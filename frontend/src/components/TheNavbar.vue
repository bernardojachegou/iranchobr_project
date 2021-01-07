<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link :to="{ name: 'Home' }">Página inicial</router-link>
        </b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Cadastro" right>
          <b-dropdown-item
            ><router-link :to="{ name: 'CreateAnimal' }"
              >Animais</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link :to="{ name: 'CreatePerson' }"
              >Pessoas</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link :to="{ name: 'CreateBatch' }"
              >Lotes</router-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Listas" right>
          <b-dropdown-item href="#">Animais</b-dropdown-item>
          <b-dropdown-item href="#">Pessoas</b-dropdown-item>
          <b-dropdown-item href="#">Lotes</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- Search input -->
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