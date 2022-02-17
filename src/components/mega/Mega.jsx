import './Mega.css';
import React , { useState } from "react";

function gerarNumeros(props) {
    const shuffle = (array) => {
        let currentIndex = props, temporaryValue, randomIndex;
        while (0 < currentIndex) {
          randomIndex = Math.round(Math.random() * array.length);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }
    const result = [];
    const sequence = Array.from({length: 60}, (_, i) => i + 1);
    result.push(shuffle(sequence));
    return result[0].slice(0, props).sort((a, b) => a - b);
}

export default (props) => {
    const [qtde, setQtde] = useState(props.qtde || 6);
    if (qtde<6 || qtde>15) return 'Adequar quantidade de números para sortear!';
    const [numeros, setNumeros] = useState(gerarNumeros(qtde));
    return(
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Números:</label>
                <input type="number" value={qtde}
                    min='6'
                    max='15'
                    onChange={e => {setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    );
}