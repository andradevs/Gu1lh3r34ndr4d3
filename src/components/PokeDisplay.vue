<template>
  <div class="poke-display">
    <v-card v-show="pokemon.id" width="100%" max-width="250px" :disabled="loading">
      <!-- Loading do Card -->
      <v-container v-if="loading" class="loading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-container>
      <!-- fim do Loading -->
      <v-img :src="pokemon.sprite"  lazy-src="../assets/pokeball.png" />
      <v-card-text>
        <!-- tabela com informações da API -->
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
        <!-- fim da tabela -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PokeDisplay",
  computed: {
    ...mapState({
      //States do store.js
      pokemon: state => state.pokemon,
      loading: state => state.loading
    })
  },
};
</script>

<style scoped>
.v-card__text {
  display: flex;
  justify-content: center;
  font-family: "pokemon-font", monospace;
  font-size: 12px;
}
.loading {
  position: absolute;
  left: 40%;
  top: 50%;
  padding: 0;
}
tr > td:nth-child(1) {
  width: 70px;
}
/* Alteração na font pra tamanho das telas */
@media (max-width: 800px) {
  .v-card__text {
    font-size: 8px;
  }
}
@media (min-width: 800px) and ( max-width: 1000px) {
  .v-card__text {
    font-size: 10px;
  }
}
</style>