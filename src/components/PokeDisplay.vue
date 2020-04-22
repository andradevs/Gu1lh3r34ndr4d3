<template>
  <div class="poke-display">
    <h1>PokeDisplay</h1>
    <div class="img-src">
      <img :src="pokemon.sprite" alt />
    </div>
    <div class="info-div">
      <table>
        <tbody>
          <tr>
            <td>Nº:</td>
            <td>{{pokemon.id}}</td>
          </tr>
          <tr>
            <td>Nome:</td>
            <td>{{pokemon.name}}</td>
          </tr>
          <tr>
            <td>Tipo:</td>
            <td>{{pokemon.types}}</td>
          </tr>
          <tr>
            <td>Altura:</td>
            <td>{{pokemon.height}}m</td>
          </tr>
          <tr>
            <td>Peso:</td>
            <td>{{pokemon.weight}}Kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Api from "../controllers/Api";
export default {
  name: "PokeDisplay",
  props: ["pokeID"],
  data() {
    return {
      pokemon: {}
    };
  },
  created() {
    this.updateDetails(this.pokeID);
  },
  updated() {
    console.log("lol");
    this.updateDetails(this.pokeID);
  },
  methods: {
    async updateDetails(id) {
      console.log("hit");
      this.pokemon = await Api.getDetails(id);
    }
  }
};
</script>

<style scoped>
.img-src {
  background: black;
  height: 200px;
  width: 200px;
  border: 5px solid #ddd;
  border-radius: 4px;
}
.img-src img {
  height: 100%;
  width: 100%;
}
</style>