<template>
  <div class="poke-list-div">
    <h1>PokeList</h1>
    <div class="form-div">
      <form>
        <label for="type">Tipo:</label>
        <select id="type" @change="showTypeSelected">
          <option value="All">All</option>
          <option v-for="type in types" :value="type.name" :key="type.name">{{type.name}}</option>
        </select>
      </form>
    </div>
    <div class="poke-list">
      <PokeDiv
        v-for="poke in pokesToShow"
        @click.native="passPokemon"
        :id="poke.entry_number"
        :pokemon="poke"
        :key="poke.entry_number"
      />
    </div>
  </div>
</template>

<script>
import PokeDiv from "@/components/PokeDiv.vue";
import Api from "../controllers/Api";
export default {
  name: "PokeList",
  components: {
    PokeDiv
  },
  data() {
    return {
      pokemons: [],
      types: [],
      pokesToShow: []
    };
  },
  created() {
    this.listPokemons();
    this.listTypes();
  },
  methods: {
    async listPokemons() {
      this.pokemons = await Api.getPokemons();
      this.pokesToShow = this.pokemons;
    },
    async listTypes() {
      this.types = await Api.getTypes();
    },
    async showTypeSelected(e) {
      if (e.target.value === "All") return (this.pokesToShow = this.pokemons);
      let typePokemons = await Api.getType(e.target.value);
      typePokemons = typePokemons.map(poke => poke.pokemon.name);
      this.pokesToShow = this.pokemons.filter(poke =>
        typePokemons.includes(poke.pokemon_species.name)
      );
    },
    passPokemon(e) {
      this.$emit("pass-pokemon", e.currentTarget.id);
    }
  }
};
</script>

<style scoped>
.poke-list-div {
  background: white;
  height: 80vh;
  /* overflow: auto; */
}
.poke-list{
    height: 80%;
    overflow: auto;
}
ul {
  padding: 0;
}
</style>