import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Videos from "@/components/Videos/Videos";

export default function Home() {
  return (
    <>
       <Head>
          <title>Home</title>
        </Head>
      <main className={styles.containerHome}>

        <h1 className={styles.homeTitle}>DRIVE FORWARD.</h1>
        <h2 className={styles.homeSubtitle}>TOGETHER</h2>

        <h4 className={styles.homeTextSubtitle}>Juntos, podemos tornar a mobilidade mais sustentável, segura e confortável</h4>

        <div className={styles.homeInfosContainer}>

          <p>Inovar em produtos químicos de alto desempenho e sustentáveis é a missão da Divisão Automotiva da BASF, desempenhando um papel importante na criação de novas soluções e atendendo às demandas de nossos clientes.</p>

          <p>A BASF oferece uma ampla gama de produtos, proporcionando maior qualidade, segurança e eficiência. Isso inclui o desenvolvimento de produtos para Pintura, Repintura, Plásticos de Engenharia, Espumas de Poliuretano e Especialidades, Revestimentos, Pigmentos, Catalisadores, Tratamento de Metais, Aditivos para Combustível, Lubrificantes de Eixo e de Transmissão, Fluidos Refrigerantes e de Freio, Além de Materiais para Bateria e carregamento.</p>

          <p>E para trazer maior transparência de quais produtos podem atender a indústria da mobilidade, lançamos esta plataforma onde o usuário poderá acessar as informações comerciais, fichas técnicas dos produtos, solicitar cotações e amostras, enviar perguntas e sugestões além de acessar conteúdos exclusivos sobre tendências e desafios do futuro da mobilidade.</p>

          <p>Conheça nossas soluções na Aba Produtos e fique por dentro dos conteúdos e projetos de circularidade direcionados ao ecossistema da mobilidade.</p>

          <p>Vamos juntos em direção a um novo futuro!</p>


         <Videos/>

          <p className={styles.paragrafoTasa}>Para maiores informações, dúvidas ou sugestões <span className={styles.spanAzul}>entre em contato com a gente através do e-mail: </span><a href='mailto: team-automotive-south-america@basf.com' className={styles.automotiveEmail}>team-automotive-south-america@basf.com </a> </p>

          <div className={styles.carroVirtual}>
            <div className={styles.descCarroVirtual}>
              <h1>
                Conheça o <a href="https://basf-vcar.com/" target="_blank" rel='noreferrer'>
                  <strong>carro virtual</strong>
                </a>
                : o portfólio completo de soluções automotivas.
              </h1>
            </div>
          </div>
        </div>

      </main >

    </>
  );
}
