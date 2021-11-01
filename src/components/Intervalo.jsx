import './Intervalo.css';
import React from 'react';

import { connect } from 'react-redux';
import { alterarValorMinino, alterarValorMaximo } from '../store/actions/numeros'

import Card from './Card';

const Intervalo = props => {
    const {min, max} = props;
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => props.alterarMaximo(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

function mapDispathToProps(dispath){
    return{
        alterarMinimo(novoNumero){
            // Action Creator -> action
            const action = alterarValorMinino(novoNumero);
            dispath(action);
        },
        alterarMaximo(novoNumero){
            // Action Creator -> action
            const action = alterarValorMaximo(novoNumero);
            dispath(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Intervalo);
