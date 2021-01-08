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
  data: () => ({
    selected: null,
    searchName: "",
    options: [{ value: null, text: "Nome do animal" }],
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