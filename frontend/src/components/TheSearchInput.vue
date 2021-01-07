<template>
  <div>
    <b-form-input v-model="selected" v-show="selected" @click="resetSelected" />
    <b-form-input
      ref="searchOption"
      v-model.trim="searchName"
      v-show="!selected"
    />
    <div
      v-for="(option, index) in filterNameOptions"
      :key="index"
      class="dropdown-item"
      @click="selectedOption(option)"
      v-show="!selected"
    >
      <!--      <img :src="item.flag" class="dropdown-item-flag"/>-->
      {{ option.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    selected: null,
    searchName: "",
    options: [
      { value: null, text: "Please select an option" },
      { value: "a", text: "This is First option" },
      { value: "b", text: "Selected Option" },
      { value: { C: "3PO" }, text: "This is an option with object value" },
      { value: "d", text: "This one is disabled", disabled: true },
      { value: "e", text: "Hamilton Gato" },
    ],
  }),
  computed: {
    filterNameOptions() {
      return this.options.filter((item) =>
        item.text.toLowerCase().includes(this.searchName.toLowerCase())
      );
    },
  },
  methods: {
    selectedOption(option) {
      this.selected = option.text;
    },
    resetSelected() {
      this.selected = null;
      this.$nextTick(() => this.$refs.searchOption.focus());
    },
  },
};
</script>

<style scoped>
</style>