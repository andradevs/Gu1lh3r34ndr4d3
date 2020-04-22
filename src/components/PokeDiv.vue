<template>
    <div class="poke-cell">
      <div class="img-div">
        <img :src="imgSrc" alt=" pokemon.pokemon_species.name" />
      </div>
      <span>{{ pokemon.pokemon_species.name }}</span>
    </div>
</template>

<script>
export default {
  props: ["pokemon"],
  name: "PokeDiv",
  data() {
    return {
      imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.entry_number}.png`
    };
  }
};
</script>

<style scoped>
.poke-cell {
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid #ddd;
}
a {
  display: block;
  height: 100%;
  width: 100%;
}
</style>