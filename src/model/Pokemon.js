//Classe Pokemon 
class Pokemon {
    //recebe como parametro a resposta da API
    constructor(poke){
         
        this.id = poke.id;
        this.name = poke.name;
        this.types = this._getTypes(poke.types);
        this.sprite = poke.sprites.front_default;
        this.height = this._Convert(poke.height);
        this.weight = this._Convert(poke.weight);
    }
    //Pega os tipos do pokemon 
    _getTypes(types){
        if(types.length > 0){
            types = types.map(type =>{
                return type.type.name
            })
            types = types.reverse().join("/")
        }
        return types
    }
    //Converte as unidade de medida e Altura para as reais
    _Convert(unit){
        return unit / 10
    }
}

export default Pokemon;