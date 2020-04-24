<template>
  <div>
    <Header />
    <v-container class="container">
      <v-row>
        <v-col cols="3">
          <PokeDisplay :pokeID="pokeID" />
        </v-col>
        <v-col cols="8">
          <PokeList/>
        </v-col>
      </v-row>
    </v-container>
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
    };
  },
  components: {
    Header,
    Footer,
    PokeList,
    PokeDisplay
  },
};
</script>

<style scoped>
/* .container {
  display: flex;
  justify-content: space-around;
} */
</style>