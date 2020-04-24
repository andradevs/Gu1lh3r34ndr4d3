<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :class="{'on-hover':hover } + ' poke-cell'" :color="hover ? '#4bc3ff' : '#fff'">
      <span>{{ pokemon.pokemon_species.name }}</span>
      <v-avatar class size="60" tile>
        <v-img :src="imgSrc" alt=" pokemon.pokemon_species.name" lazy-src="../assets/pokeball.png" />
      </v-avatar>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["pokemon"],
  name: "PokeDiv",
  data() {
    return {
      //url para sprite
      imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.entry_number}.png`
    };
  }
};
</script>

<style scoped>
.poke-cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  font-family: "pokemon-font", monospace;
  font-size: 14px;
  cursor: pointer;
}
</style>