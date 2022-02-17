import React from "react";
import produtos from "../../data/produtos";

export default props => {
    const lis = produtos.map((produto) => {
        return (
            <li key={produto.id}>
                {produto.id}) {produto.nome} -{">"} {produto.preco}
            </li>
        )
    });

    return (
        <div>
            <ul style = {{listStyle: 'none'}}>
                {lis}
            </ul>
        </div>
    )
}