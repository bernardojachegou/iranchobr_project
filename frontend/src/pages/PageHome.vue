<template>
  <div>
    <TheNavbar />
    <div class="main">
      <div class="d-flex justify-content-center">
        <h1>Informações de registros</h1>
      </div>
      <TheSearchInput />
    </div>
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
