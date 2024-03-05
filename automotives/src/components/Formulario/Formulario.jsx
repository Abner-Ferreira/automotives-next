import React, { useContext, useState } from 'react'
import styles from './formulario.module.css'
import ProdutoInteresse from '../ProdutoInteresse/ProdutoInteresse'
import { FormContext } from '../../context/formContext'
import { ThreeDots } from 'react-loader-spinner';


export default function Formulario() {

  const { enviarForm, success } = useContext(FormContext)

  const [nome, setNome] = useState('')
  const [nomeEmp, setNomeEmp] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')




  return (
    <>
      <div className={styles.formularioContainer} id='formulario'>
        <h1>Produtos que tenho interesse</h1>
        {/* colocar os produtos aqui */}
        <ProdutoInteresse />

        <div className={styles.inputForms}>
          <label htmlFor="nmCompleto">Nome Completo <span>*</span></label>
          <input type="text" name="nmCompleto" placeholder='Insira seu nome completo' onChange={e => setNome(e.target.value)} value={nome} />
        </div>

        <div className={styles.inputForms}>
          <label htmlFor="email">E-mail <span>*</span></label>
          <input type="email" name="email" placeholder='Insira seu e-mail' onChange={e => setEmail(e.target.value)} value={email} />
        </div>

        <div className={styles.inputForms}>
          <label htmlFor="telefone">Telefone </label>
          <input type="tel" name="telefone" placeholder='Insira seu telefone' onChange={e => setTel(e.target.value)} value={tel} />
        </div>

        <div className={styles.inputForms}>
          <label htmlFor="nmEmpresa">Nome da Empresa</label>
          <input type="text" name="nmEmpresa" placeholder='Insira o nome de sua empresa' onChange={e => setNomeEmp(e.target.value)} value={nomeEmp} />
        </div>

        {success ? <ThreeDots
          height="60"
          width="60"
          radius="9"
          color="#004a96"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        /> : <button onClick={() => enviarForm(nome, email, tel, nomeEmp)}>ENVIAR</button>}
        {/* <button onClick={() => enviarForm(nome, email, tel, nomeEmp)}>ENVIAR</button> */}
      </div>
    </>
  )
}
