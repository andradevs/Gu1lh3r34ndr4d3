<template>
  <div>
    <Header />
    <div class="container">
      <PokeDisplay :pokeID="pokeID"/>
      <PokeList @pass-pokemon="updatePokeDetails"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PokeList from "@/components/PokeList.vue";
import PokeDisplay from "@/components/PokeDisplay.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "index",
  data() {
      return {
          pokeID: 1
      }
  },
  components: {
    Header,
    Footer,
    PokeList,
    PokeDisplay
  },
  methods: {
      updatePokeDetails(id){
          this.pokeID = id
      }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  background: white;
}
</style>