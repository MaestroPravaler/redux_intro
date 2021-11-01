import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numeros: function(state, action){
        console.log('Reducer numeros ...');
        console.log(state, ' ',action)
        return{
            min: 7,
            max: 31,
        }
    },
    nomes: function(state, action){
        console.log('Reducer nomes ...');
        console.log(state, " ", action);
        return[
            'Ana',
            'Robson',
            'Leo',
        ]
    }
})

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;