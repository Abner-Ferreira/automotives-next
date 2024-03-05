import React, { createContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useRouter } from 'next/navigation'

export const FormContext = createContext({})

export default function FormContextProvider({ children }) {

    const [success, setSuccess] = useState(false)

    const url = axios.create({
        baseURL: 'https://sheetdb.io/api/v1/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer 6vhv0gsgqtwfkao1yaf3askc61fystwon5n9yrgz`
        }
    })

    const navigate = useRouter()
    const urlAgradecimento = "/mobilidade/form/thank-you"

    function enviarForm(nome, email, tel, nomeEmp) {

        if (nome === '' || email === '') {
            return toast.error("Os campos com * são obrigatórios")
        } else {

            const novaLista = []
            if (produtosSelecionados) {
                produtosSelecionados.forEach((produto) => {
                    novaLista.push(produto.nome)

                })
            }
            var data = new Date()
            data = `${data.getDate()}/${data.getMonth()>=11? 12 : data.getMonth()+1}/${data.getFullYear()}`

            url.post(`tax2nqr8cpt16`, {
                "Nome Completo": nome,
                "Email": email,
                "Telefone": tel,
                "Nome da Empresa": nomeEmp,
                "Produtos de Interesse": novaLista,
                "Data de Envio": data
            })
                .then(() => {
                    setSuccess(true)
                    setTimeout(() => toast.success('Formulário enviado com sucesso!'), 2000)
                })
                .then(() => setTimeout(() => {
                    navigate.push(`${urlAgradecimento}`)
                    setSuccess(false)
                    setProdutosSelecionados([])
            }, 5000))
                
                .catch((err) => {
                    toast.error("Erro ao enviar o formulário: " + err)
                    setSuccess(false)
                })
        }
    }




    const [produtosSelecionados, setProdutosSelecionados] = useState([])



    const tenhoInteresse = (prod) => {
        setProdutosSelecionados(produtos => [...produtos, prod])
        toast.success(`${prod.nome} \nadicionado ao formulário de interesse`)
    }

    const removerSelecionado = (id, nome) => {
        setProdutosSelecionados(produtos => produtos.filter(prdRemovido => prdRemovido.id !== id))
        toast.error(`${nome} removido do formulário de interesse`)
    }


    return (
        <FormContext.Provider value={{ enviarForm, tenhoInteresse, produtosSelecionados, removerSelecionado, success }}>
            {children}
            <Toaster
                position="top-center"
                reverseOrder={false}
                duration={9000}
                toastOptions={{
                    success: {
                        style: {
                            border: '1px #004a96 solid',
                            color: '#004a96',
                        }

                    },
                    error: {
                        style: {
                            border: '1px #f00 solid',
                            color: "#f00"
                        }
                    },
                }}
            />

        </FormContext.Provider>
    )
}
