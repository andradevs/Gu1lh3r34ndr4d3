import axios from "axios";
import Pokemon from "../model/Pokemon"

const Api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})
export default {
    getDetails(id){
        return Api.get(`pokemon/${id}`)
            .then(res => new Pokemon(res.data))
            // .then(res =>console.log(res))
    },
    getPokemons() {
        return Api.get('pokedex/2')
            .then(res => res.data.pokemon_entries)
    },
    getTypes() {
        return Api.get('type/?limit=18')
            .then(res => res.data.results)
    },
    getType(id) {
        console.log('kdada')
        return Api.get(`type/${id}`)
            .then(res => res.data.pokemon)
    }
}

