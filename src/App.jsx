import './App.css';

import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/basicos/comunicacao/DiretaPai';
import IndiretaPai from './components/basicos/comunicacao/IndiretaPai';
import Input from './components/basicos/formulario/Input';
import Contador from './components/basicos/contador/Contador';
import Mega from './components/mega/Mega';

export default () => 
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo = '#13 - Mega Sena' color = '#ffaf75'>
                <Mega qtde={10} />
            </Card>
            <Card titulo = '#12 - Contador' color = '#424242'>
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo = '#11 - Componente Controlado' color = '#ffa200'>
                <Input />
            </Card>
            <Card titulo = '#10 - Comunicação Indireta' color = '#ace381'>
                <IndiretaPai />
            </Card>
            <Card titulo = '#09 - Comunicação Direta' color = '#471900'>
                <DiretaPai />
            </Card>
            <Card titulo = '#08 - Renderização Condicional - Par ou Ímpar' color = '#9d00ff'>
                <ParOuImpar numero = {21} />
                <UsuarioInfo usuario = {{nome: 'Fernando'}}><br></br></UsuarioInfo>
                <UsuarioInfo usuario = {{email: 'fern@ndo.com'}}><br></br></UsuarioInfo>
                <UsuarioInfo />
            </Card>
            <Card titulo = '#07 - Repetição Produtos' color = '#471900'>
                <TabelaProdutos />
            </Card>
            <Card titulo = '#06 - Repetição Lista de Alunos' color = '#bcff03'>
                <ListaAlunos />
            </Card>
            <Card titulo = '#05 - Componente com Filhos' color = '#00F'>
                <Familia sobrenome = 'Silva'>
                        <FamiliaMembro nome = 'Pedro' />
                        <FamiliaMembro nome = "Ana" />
                        <FamiliaMembro nome = "Gustavo" />
                </Familia>
            </Card>
            <Card titulo = '#04 - Desafio Aleatório' color = '#080'>
                <Aleatorio
                    min = {1}
                    max = {60}
                />
            </Card>
            <Card titulo = '#03 - Desafio Fragmento' color = '#66ff2e'>
                <Fragmento/>
            </Card>
            <Card titulo = '#02 - Desafio Com Parâmetro' color = '#008cff'>
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno='Pedro Silva'
                    nota={9.3} />
            </Card>
            <Card titulo='#01 - Primeiro' color = '#bcff03'>
                <Primeiro/>
            </Card>
        </div>  
    </div>