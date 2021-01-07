<template>
  <div>
    <TheNavbar />
    <div class="d-flex justify-content-center">
      <h1>Dados de Registros</h1>
    </div>
    <TheSearchInput />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheSearchInput from "@/components/TheSearchInput";
export default {
  components: {
    TheNavbar,
    TheSearchInput,
  },
};
</script>
