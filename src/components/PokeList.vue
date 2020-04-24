<template>
  <v-card :disabled="loading" width="100%" height="auto">
    <!-- Inicio da div de formulario dos filtros -->
    <v-container class="form-div">
      <v-form>
        <v-row>
          <v-col cols="4">
            <!-- Select de tipos -->
            <v-select
              v-model="valueTypes"
              :items="types"
              label="Tipos"
              chips
              multiple
              attach
              id="type"
            ></v-select>
          </v-col>
          <v-col cols="4">
            <!-- Select de Cores -->
            <v-select
              v-model="valueColors"
              :items="colors"
              label="Cores"
              chips
              multiple
              attach
              id="colors"
            ></v-select>
          </v-col>
          <v-btn small col="3" class="button" :loading="loading" @click="showTypeSelected">Filtrar</v-btn>
        </v-row>
      </v-form>
    </v-container>
    <!-- Fim da div formulario de filtros -->
    <!-- inicio da lista dos pokemons -->
    <v-container class="scroll">
      <PokeDiv
        v-for="poke in pokesToShow"
        @click.native="updatePokeID"
        :id="poke.entry_number"
        :pokemon="poke"
        :key="poke.entry_number"
      />
    </v-container>
    <!-- fim da lista dos pokemons -->
  </v-card>
</template>

<script>
import PokeDiv from "@/components/PokeDiv.vue";
import { mapActions } from "vuex";
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
      valueTypes: [],
      valueColors: [],
      colors: [],
      pokesToShow: [],
      loading: false
    };
  },
  //metodos chamados na criação do componente
  created() {
    this.listPokemons();
    this.listTypes();
    this.listColors();
  },
  methods: {
    //recebe todos os pokemons de KANTO e exibe na tela
    async listPokemons() {
      this.pokemons = await Api.getPokemons();
      this.pokesToShow = this.pokemons;
    },
    //Insere os tipos no Select
    async listTypes() {
      this.types = await Api.getTypes();
    },
    //Insere as cores no Select
    async listColors() {
      this.colors = await Api.getColors();
    },

    async showTypeSelected() {
      this.loading = true;
      let pokemons = this.pokemons.map(poke => poke.pokemon_species.name);
      let typePokemons = [];
      let colorPokemons = [];
      let typesAPI;
      let colorsAPI;
      //Verifica campos de filtro vazios 
      if (!this.valueTypes.length && !this.valueColors.length) {
        this.loading = false;
        return (this.pokesToShow = this.pokemons);
      } else if (!this.valueTypes.length) {
        typePokemons = pokemons;
      } else if (!this.valueColors.length) {
        colorPokemons = pokemons;
      }
      //Loop para receber todos os pokemons do TIPO
      for (let i = 0; i < this.valueTypes.length; i++) {
        typesAPI = await Api.getType(this.valueTypes[i]);
        typesAPI = typesAPI.map(poke => poke.pokemon.name);
        typePokemons.push(...typesAPI);
      }
      //Loop para receber todos os pokemons da COR
      for (let i = 0; i < this.valueColors.length; i++) {
        colorsAPI = await Api.getColor(this.valueColors[i]);
        colorsAPI = colorsAPI.map(poke => poke.name);
        colorPokemons.push(...colorsAPI);
      }
      //UNIÃO DE TODOS OS FILTROS 
      const filter = this.ListFilter(pokemons, typePokemons, colorPokemons);
      this.pokesToShow = this.pokemons.filter(poke => {
        return filter.includes(poke.pokemon_species.name);
      });
      this.loading = false;
    },

    ListFilter(all, types, colors) {
      let newTypes = all.filter(name => types.includes(name));
      let newColors = all.filter(name => colors.includes(name));
      let newAll = newColors.filter(name => newTypes.includes(name));
      return newAll;
    },
    //Atualiza o state pokemon e exibe no Display
    ...mapActions(["updatePokeID"])
  }
};
</script>

<style scoped>
.poke-list-div {
  /* background: white; */
  height: 80vh;
  /* overflow: auto; */
}
.v-container {
  padding: 0;
}
.v-card {
  overflow: hidden;
}
.scroll {
  overflow: auto;
  height: 60vh;
  background: #ddd;
}
.button {
  background-color: #283593 !important;
  width: 30%;
  color: #fff !important;
  margin-top: 40px;
}
ul {
  padding: 0;
}
</style>