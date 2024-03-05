import { useContext } from 'react'
import { FormContext } from '../../context/formContext'
import Image from 'next/image'
import styles from './produto.module.css'



export default function Produto({ filtro }) {

    const { tenhoInteresse } = useContext(FormContext)


    return (
        <>
            <div className={styles.containerTodosProdutos}>
                {
                    filtro.map((produto) => (

                        produto.nome === "Irgacycle XT 034" || produto.nome === "Irgacycle PS 032" || produto.nome === "Ultramid A3WG6 RC" || produto.nome === "Ultramid B3WG6 RC" ?
                            <div className={styles.containerProduto} key={produto.id} >
                                <Image priority src={produto.imagem} alt="Imagem dos produtos" />
                                <h1> {produto.nome} </h1>
                                <p> {produto.desc} </p>
                                <button> <a href={produto.url} target='_blank' rel='noreferrer'> COMPRAR PRODUTO </a></button>
                                <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="download">Informações do produto </a>
                            </div>
                        :
                        produto.nome === "TrinamiX" ?
                            <div className={styles.containerProduto} key={produto.id} >
                               <Image priority src={produto.imagem} alt="Imagem dos produtos" />
                                <h1> {produto.nome} </h1>
                                <p> {produto.desc} </p>
                                <button id={styles.btnTrinamix}> <a href={produto.url} target='_blank' rel='noreferrer'> COMPRAR PRODUTO </a> </button>
                            </div>
                        : produto.nome === "Acronal" ? 
                        
                            <div className={styles.containerProduto} key={produto.id} >
                               <Image priority src={produto.imagem} alt="Imagem dos produtos" />
                                <h1> {produto.nome} </h1>
                                <p> {produto.desc} </p>
                                <button onClick={() => tenhoInteresse(produto)}> TENHO INTERESSE </button>
                                <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="download">Informações dos produtos </a>
                            </div>
                        : produto.nome === "Elastofoam® I (PU)" || produto.nome === "Elastoflex® E (PU)" || produto.nome === "Catalisadores Automotivos" ? 
                            <div className={styles.containerProduto} key={produto.id} >
                               <Image priority src={produto.imagem} alt="Imagem dos produtos" />
                                <h1> {produto.nome} </h1>
                                <p> {produto.desc} </p>
                                <button onClick={() => tenhoInteresse(produto)}> TENHO INTERESSE </button>
                                <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="action">Informações do produto </a>
                            </div>
                        :
                            <div className={styles.containerProduto} key={produto.id} >
                               <Image priority src={produto.imagem} alt="Imagem dos produtos" />
                                <h1> {produto.nome} </h1>
                                <p> {produto.desc} </p>
                                <button onClick={() => tenhoInteresse(produto)}> TENHO INTERESSE </button>
                                <a href={produto.ficha} target='_blank' rel='noreferrer' data_tealium_value={produto.tealiumValue} data_tealium_type="download">Informações do produto </a>
                            </div>
                    ))
                }
            </div>
        </>
    )
}
