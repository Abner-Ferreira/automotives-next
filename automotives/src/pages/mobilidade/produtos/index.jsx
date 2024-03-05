'use client'
import Produto from '@/components/Produto/Produto'
import React, { useState } from 'react'
import styles from './produtos.module.css'
import Formulario from '@/components/Formulario/Formulario'
import { todosProdutos } from '@/services/todosProdutos'

export default function Produtos() {

  const [produtoFiltrado, setProdutoFiltrado] = useState(todosProdutos)

  const filtro = (tipos) => {
    if (tipos !== 'Todos') {
      setProdutoFiltrado(todosProdutos.filter((produto) => produto.filtro.includes(tipos)))
    } else {
      setProdutoFiltrado(todosProdutos)
    }
  }


  return (
    <>
      <div className={styles.introducaoFiltros}>
        <p>Conheça as soluções BASF para a indústria da mobilidade. Aqui você terá acesso a informações como aplicação e dados técnicos dos produtos. Alguns dos nossos materiais estão disponível para compra online e você poderá acessar a página através dos links que disponibilizamos. </p>
        <p>Ficou interessado em algum produto e quer obter maiores informações clique no botão <b>“Tenho Interesse”</b>. </p>
        <p>Os itens selecionados aparecerão na sua <b>"Lista de Interesse"</b> que estará disponível no final desta página. Basta preencher seus dados, revisar os produtos selecionados e clicar no botão <b>“Enviar”</b>. A nossa equipe entrará em contato para fornecer mais detalhes</p>
      </div>

      <div className={styles.filtros}>
        <div>
          <button onClick={() => filtro('Todos')} className={styles.btnFiltros}>Todos</button>
        </div>
        <div>
          <button onClick={() => filtro('Polímeros')} className={styles.btnFiltros}>Polímeros</button>
        </div>
        <div>
          <button onClick={() => filtro('Fluídos')} className={styles.btnFiltros}>Fluídos</button>
        </div>
        <div>
          <button onClick={() => filtro('Sistema-de-exaustão')} className={styles.btnFiltros}>Sistema de Exaustão</button>
        </div>
        <div>
          <button onClick={() => filtro('Pintura')} className={styles.btnFiltros}>Pintura</button>
        </div>

      </div>
      <Produto filtro={produtoFiltrado} />
      <Formulario />
    </>
  )
}
