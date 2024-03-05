//----------------------------- IMAGENS PRODUTOS FLUÍDOS -----------------------------
//----------------------------- IMAGENS PRODUTOS FLUÍDOS -----------------------------

//----------------------------- IMAGENS PRODUTOS POLÍMEROS -----------------------------
import ecovio from '../assets/imgs-produtos/Titelbild_ecovio_2019_quer.jpg'
import ultrason from '../assets/imgs-produtos/ultrason_helm_freisteller_8703.jpg'
import basotec from '../assets/imgs-produtos/Basotect.png'
import irgacycle032 from '../assets/imgs-produtos/ircacycle032.png'
import irgacycle034 from '../assets/imgs-produtos/irgacycle034.png'
import trinamix from '../assets/imgs-produtos/trinamix.jpg'
import hydraulan404 from '../assets/imgs-produtos/BASF_Hydraulan_404-Products.png'
import hydraulan406 from '../assets/imgs-produtos/BASF_Hydraulan_406-Products.png'
import glysantin70 from '../assets/imgs-produtos/G70.png'
import glysantinCG48 from '../assets/imgs-produtos/Glysantin_C_G48_20L_RGB.png'
import glysantinG30 from '../assets/imgs-produtos/Glysantin_Concentrate_G30_1L.png'
import glysantinG40 from '../assets/imgs-produtos/Glysantin_Concentrate_G40_1L.png'
import glysantinG65 from '../assets/imgs-produtos/Glysantin_Concentrate_G65_1L.png'
import catalisadores from '../assets/imgs-produtos/Catalisadores.png'
import acrodur from '../assets/imgs-produtos/BASF_Acrodur brochure_NF_21751943_HighRes_CMYK.jpg'
import acronal from '../assets/imgs-produtos/Auto-halbiert-Text-ENG.png'
import ultramidB3 from '../assets/imgs-produtos/Ultramid_B3WG6_RC.png'
import ultramidA3 from '../assets/imgs-produtos/Ultramid_A3WG6_RC.png'
import elastofoam from '../assets/imgs-produtos/Elastofoam_I_(PU).png'
import elastoflex from '../assets/imgs-produtos/Elastoflex_E_(PU).png'
import glasuritLimpeza from '../assets/imgs-produtos/Glasurit_700-10_(Glasurit Limpeza).png'
import glasuritMulti from '../assets/imgs-produtos/Glasurit_839-20_(Glasurit Multiuso).png'
import glasuritPrimer from '../assets/imgs-produtos/Glasurit_285-700_(Glasurit Primer).png'
import glasuritBase from '../assets/imgs-produtos/Glasurit_Linha_90_(Glasurit Base Color).png'
import glasuritVerniz from '../assets/imgs-produtos/Glasurit_923-610_(Glasurit Verniz).png'
import gardostrip from '../assets/imgs-produtos/Gardostrip.png'
import oxsilan from '../assets/imgs-produtos/Oxsilan.png'
import cathoguard from '../assets/imgs-produtos/Pintura_CathoGuard_800_e_840_Low_Bake.png'
import cathoguard580 from '../assets/imgs-produtos/Foto - CathoGuard® 580 e 800 RE.jpg'

export const todosProdutos = [

    //------------------------------------- PRODUTOS FLUÍDOS -------------------------------------
    {
        id: 1,
        filtro: ['Fluídos'],
        imagem: hydraulan404,
        nome: 'HYDRAULAN 404',
        desc: 'HYDRAULAN® 404 é o fluido de freio DOT 4 Classe 6 de maior qualidade do mercado. Sua baixa viscosidade sob baixas temperaturas permite um aumento rápido da pressão de freio, proporcionando uma resposta imediata do sistema de frenagem. Seu desempenho é cerca de 30% mais eficiente que os fluidos tradicionais, garantindo segurança mesmo nas condições climáticas mais adversas.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Hydraulan_404_SmallPackaging_onePager_11_RZ_Web%20(BASF_PC-005080).pdf',
        tealiumValue: "Hydraulan_404_SmallPackaging_onePager_11_RZ_Web_(BASF_PC-005080).pdf"
    },
    {
        id: 2,
        filtro: ['Fluídos'],
        imagem: hydraulan406,
        nome: 'HYDRAULAN 406 ESI',
        desc: 'HYDRAULAN® 406 ESI representa a nova geração de fluidos de freio, superando os rigorosos padrões e requisitos internacionais. Sua baixíssima viscosidade em temperaturas de até -40°C resulta em uma frenagem significativamente mais segura, mesmo sob condições extremas.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Hydraulan_406_ESI_SmallPackaging_onePager_09_RZ_Web%20(BASF_PC-005080).pdf',
        tealiumValue: "Hydraulan_406_ESI_SmallPackaging_onePager_09_RZ_Web_(BASF_PC-005080).pdf"
    },
    {
        id: 9,
        filtro: ['Fluídos'],
        imagem: glysantin70,
        nome: 'GLYSANTIN G70',
        desc: 'GLYSANTIN® G70 age de forma eficaz contra a corrosão e depósitos em motores, protegendo partes vitais do sistema de refrigeração, como os canais de refrigeração no bloco, a cabeça do cilindro, o radiador, a bomba de água e o núcleo do aquecedor.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G70%C2%AE%20-%20Engine%20Coolant%20Concentrate%20-%20TI.pdf',
        tealiumValue: "Glysantin®_G70®_-_Engine_Coolant_Concentrate_-_TI.pdf"
    },
    {
        id: 10,
        filtro: ['Fluídos'],
        imagem: glysantinCG48,
        nome: 'GLYSANTIN G48',
        desc: 'GLYSANTIN® G48® foi desenvolvido para prevenir a corrosão, o superaquecimento e danos causados pelo congelamento nos motores. Ele oferece proteção de alto nível contra a corrosão nos componentes do motor e evita depósitos.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G48%C2%AE%20-%20Engine%20Coolant%20Concentrate%20-%20TI.pdf',
        tealiumValue: "Glysantin®_G48®_-_Engine_Coolant_Concentrate_-_TI.pdf"
    },
    {
        id: 11,
        filtro: ['Fluídos'],
        imagem: glysantinG30,
        nome: 'GLYSANTIN G30',
        desc: 'GLYSANTIN® G30® protege o motor contra corrosão, superaquecimento e congelamento. Atua efetivamente na prevenção de corrosão e formação de depósitos em partes vitais do sistema de refrigeração do motor.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G30%C2%AE%20-%20Engine%20Coolant%20Concentrate%20-%20TI_09-2023.pdf',
        tealiumValue: "Glysantin®_G30®_-_Engine_Coolant_Concentrate_-_TI_09-2023.pdf"
    },
    {
        id: 12,
        filtro: ['Fluídos'],
        imagem: glysantinG40,
        nome: 'GLYSANTIN G40',
        desc: 'GLYSANTIN® G40 protege o motor contra a corrosão e depósitos, cuidando efetivamente das partes vitais do sistema de refrigeração, tais como os canais de refrigeração no bloco, a cabeça do cilindro, o radiador, a bomba de água e o núcleo do aquecedor.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G40%C2%AE%20-%20Engine%20Coolant%20Concentrate%20-%20TI_12-2023.pdf',
        tealiumValue: "Glysantin®_G40®_-_Engine_Coolant_Concentrate_-_TI_12-2023.pdf"
    },
    {
        id: 13,
        filtro: ['Fluídos'],
        imagem: glysantinG65,
        nome: 'GLYSANTIN G65',
        desc: 'GLYSANTIN® G65® protege motores com alto perfil de temperatura, prevenindo a formação de depósitos e corrosão no sistema de refrigeração e suas partes vitais, garantindo a longevidade do motor.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G65%C2%AE%20-%20Engine%20Coolant%20Concentrate%20-%20TI_BMB%20updated.pdf',
        tealiumValue: "Glysantin®_G65®_-_Engine_Coolant_Concentrate_-_TI_BMB_updated.pdf"
    },
    //------------------------------------- PRODUTOS FLUÍDOS -------------------------------------
    
    
    
    
    //------------------------------------- PRODUTOS PINTURA -------------------------------------
    {
        id: 24,
        filtro: ['Pintura'],
        imagem: glasuritLimpeza,
        nome: 'Glasurit Limpeza',
        desc: 'Glasurit 700-1 é eficaz na limpeza de superfícies, atuando também como um agente antiestático e diminuindo o acúmulo de pó durante o revestimento de superfícies de plástico. O Glasurit 700-10 é um desengordurante ideal para limpar superfícies que precisam de reparos na pintura. Ele é capaz de eliminar resíduos de silicone, gordura, cera e agentes desmoldantes de superfícies de plástico.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glasurit%20Limpeza%20(Glasurit%20700-10%20e%20700-1).pdf',
        tealiumValue: "Glasurit_Limpeza_(Glasurit_700-10_e_700-1).pdf"
    },
    {
        id: 25,
        filtro: ['Pintura'],
        imagem: glasuritMulti,
        nome: 'Glasurit Multiuso',
        desc: 'O Glasurit 839-20 se destaca por sua secagem rápida, ótimas propriedades de enchimento, lixagem rápida e versatilidade em todos os substratos.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glasurit%20Multiuso%20(Glasurit%20839-20)%20-%20Ficha%20Tecnica.pdf',
        tealiumValue: "Glasurit_Multiuso_(Glasurit_839-20)_-_Ficha_Tecnica.pdf"
    },
    {
        id: 26,
        filtro: ['Pintura'],
        imagem: glasuritPrimer,
        nome: 'Glasurit Primer',
        desc: 'O Primer 285-270 é versátil, podendo ser aplicado em diversos materiais, oferecendo proteção contra corrosão, resistência ao clima e um acabamento de alta qualidade.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glasurit%20Primer%20(Glasurit%20285-270)%20-%20Ficha%20Tecnica.pdf',
        tealiumValue: "Glasurit_Primer_(Glasurit_285-270)_-_Ficha_Tecnica.pdf"
    },
    {
        id: 27,
        filtro: ['Pintura'],
        imagem: glasuritBase,
        nome: 'Glasurit Base Color',
        desc: 'O Glasurit série 90 proporciona um acabamento brilhante e durável, com excelente poder de cobertura e eficácia. É um produto ecologicamente consciente, diluível em água e contendo menos de 10% de solventes orgânicos.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glasurit%20Base%20Color%20(Glasurit%2090)%20-%20Ficha%20Tecnica.pdf',
        tealiumValue: "Glasurit_Base_Color_(Glasurit_90)_-_Ficha_Tecnica.pdf"
    },
    {
        id: 28,
        filtro: ['Pintura'],
        imagem: glasuritVerniz,
        nome: 'Glasurit Verniz',
        desc: 'O Verniz HS, parte da destacada Série 90, é a escolha perfeita para reparações rápidas e eficazes em painéis individuais ou até em todo o lado do veículo. Com sua secagem rápida, nosso Verniz 923-610 não apenas garante um trabalho ágil, mas também oferece excelentes resultados finais, com um polimento impecável.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glasurit%20Verniz%20(Glasurit%20923-610)%20-%20Ficha%20Tecnica.pdf',
        tealiumValue: "Glasurit_Verniz_(Glasurit_923-610)_-_Ficha_Tecnica.pdf"
    },
    //------------------------------------- PRODUTOS PINTURA -------------------------------------
    
    
    
    
    //------------------------------------- PRODUTOS POLÍMEROS -------------------------------------
    {
        id: 4,
        filtro: ['Polímeros'],
        imagem: irgacycle032,
        nome: 'Irgacycle PS 032',
        desc: 'IrgaCycle®, uma nova linha de soluções aditivas para atender as crescentes necessidades na reciclagem de plásticos, particularmente na indústria Automotiva & Mobilidade. Esta indústria está buscando formas de incorporar mais material polimérico reciclado para atender metas de sustentabilidade, diante de preocupações dos consumidores e regulamentos rigorosos. IrgaCycle PS 032 proporciona estabilidade de processamento e proteção térmica de longo prazo para PP reciclado e misturas de poliolefinas contendo impurezas.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/TI_Irgacycle_PS_032_G.pdf',
        url: 'https://b-cycle.basf.com/b-cycle-rigid-plus',
        tealiumValue: "TI_Irgacycle_PS_032_G.pdf"
    },
    {
        id: 5,
        filtro: ['Polímeros'],
        imagem: irgacycle034,
        nome: 'Irgacycle XT 034',
        desc: 'Atendendo às demandas urgentes de reciclagem de plásticos no setor Automotivo & Mobilidade, IrgaCycle® busca responder com maior uso de material polimérico reciclado. IrgaCycle XT 034 otimiza o processamento, a estabilidade ao calor de longo prazo e ajuda a neutralizar as impurezas da "primeira vida" do plástico, melhorando, assim, as propriedades mecânicas dos reciclados de poliolefina.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/TI_Irgacycle_XT_034_DD.pdf',
        url: 'https://b-cycle.basf.com/b-cycle-mixed',
        tealiumValue: "TI_Irgacycle_XT_034_DD.pdf"
    },
    {
        id: 6,
        filtro: ['Polímeros'],
        imagem: trinamix,
        nome: 'TrinamiX',
        desc: 'A inovadora solução de espectroscopia NIR trinamiX, que distingue precisamente diversos tipos de plásticos, está agora disponível no Brasil. A tecnologia compacta do trinamiX utiliza luz infravermelha e um aplicativo móvel para análise de dados avançada, elevando a eficiência a um novo patamar.',
        url: 'https://b-cycle.basf.com/trinamix-hardware-software'
    },
    {
        id: 20,
        filtro: ['Polímeros'],
        imagem: ultramidB3,
        nome: 'Ultramid B3WG6 RC',
        desc: 'Ultramid® B3WG6 RC é um produto reforçado com 30% de fibra de vidro, produzido com matérias-primas cuidadosamente selecionadas e controladas. Com ótimo acabamento superficial e estabilidade, é amplamente utilizado em filtros de combustível automotivos, componentes de sistemas de refrigeração e caixas de componentes elétricos.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Ficha%20T%C3%A9cnica%20-%20Ultramid%C2%AE%20B3WG6%20RC.pdf',
        url: "https://plasticosengenharia.basf.com/ultramidr-b3wg6-natural",
        tealiumValue: "Ficha_Técnica_-_Ultramid®_B3WG6_RC.pdf"
    },
    {
        id: 21,
        filtro: ['Polímeros'],
        imagem: ultramidA3,
        nome: 'Ultramid A3WG6 RC',
        desc: 'Ultramid® A3WG6 RC é um produto que combina PA 66 virgem com PA reciclada, coletada através do programa CIRCULAÍ, saiba mais na aba programa de circularidade. Com menor dependência de fontes fósseis e alta performance, contribui para a reutilização de resíduos em aplicações de longa duração, incluindo peças automotivas estruturais, componentes de sistemas de ventilação e componentes eletrônicos.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Ficha%20T%C3%A9cnica%20-%20Ultramid%C2%AE%20A3WG6%20RC.pdf',
        url: "https://plasticosengenharia.basf.com/ultramidr-a3wg6-rc-pt",
        tealiumValue: "Ficha_Técnica_-_Ultramid®_A3WG6_RC.pdf"
    },
    {
        id: 22,
        filtro: ['Polímeros'],
        imagem: elastofoam,
        nome: 'Elastofoam® I (PU)',
        desc: 'Elastofoam® I se destaca especialmente por seu acabamento decorativo de superfície. A espuma integrada é amplamente usada nas indústrias de automóveis e de mobília, produzindo volantes, puxadores de câmbio de marcha, cascas de assentos e apoios de braço, assim como no compartimento do motor em usos pesados para encapsulamento de cabos, tampas de motores, tampas de cárter, anéis de vedação e gaxetas em elementos de filtro.',
        ficha: 'https://plastics-rubber.basf.com/southamerica/pt/performance_polymers/industries/pp_electronics_and_electric/products/elastofoam.html',
        tealiumValue: "/performance_polymers/industries/pp_electronics_and_electric/products/elastofoam.html"
    },
    {
        id: 23,
        filtro: ['Polímeros'],
        imagem: elastoflex,
        nome: 'Elastoflex® E (PU)',
        desc: 'As espumas semi-rígidas Elastoflex® E, embora discretas, são essenciais para o acabamento interior sofisticado dos automóveis. Elas propiciam um toque macio e elástico, preenchendo minuciosamente até as menores lacunas, garantindo um processamento robusto e uniforme.',
        ficha: 'https://plastics-rubber.basf.com/southamerica/pt/performance_polymers/products/elastoflex_e.html',
        tealiumValue: "/performance_polymers/products/elastoflex_e.html"
    },
    {
        id: 3,
        filtro: ['Polímeros'],
        imagem: ultrason,
        nome: 'Ultrason®',
        desc: 'As resinas Ultrason® são termoplásticos avançados derivados de polietersulfona (PESU), polissulfona (PSU) e polifenilsulfona (PPSU). Possuem alta resistência e uma variedade de propriedades benéficas, permitindo a sua utilização em peças de engenharia de alta qualidade e produtos de alta demanda.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/2017-10%20-%20Ultrason%20-%20%20Brochure%20-%20Full%20Version.pdf',
        tealiumValue: "2017-10_-_Ultrason_-__Brochure_-_Full_Version.pdf"
    },
    {
        id: 8,
        filtro: ['Polímeros'],
        imagem: basotec,
        nome: 'Basotect®',
        desc: 'Basotect® é uma espuma flexível, fabricada a partir de resina melamínica. Sua principal característica é a sua estrutura tridimensional, formada por filamentos finos e flexíveis, o que a torna altamente adaptável. Na indústria automotiva e da mobilidade, há possibilidades de usá-la em projetos inovadores, proporcionando absorção acústica e também atuando como protetor térmico.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/2019-10%20-%20Basotect%20Brochure.pdf',
        tealiumValue: "2019-10_-_Basotect_Brochure.pdf"
    },
    //------------------------------------- PRODUTOS POLÍMEROS -------------------------------------
    
    
    
    //------------------------------------- PRODUTOS SISTEMA DE EXAUSTÃO -------------------------------------
    {
        id: 14,
        filtro: ['Sistema-de-exaustão'],
        imagem: catalisadores,
        nome: 'Catalisadores Automotivos',
        desc: 'O Catalisador Automotivo é essencial na conversão de gases prejudiciais e poluentes originados da queima de combustível, para gases inertes. A reação química acontece com metais preciosos e é aprimorada pelas tecnologias de banho catalítico da BASF, que garantem o desempenho do catalisador e a conformidade com os regulamentos de controle de emissões de CO2.',
        ficha: 'https://catalysts.basf.com/industries/automotive-transportation/mobile-emissions-control-catalysts',
        tealiumValue: "/automotive-transportation/mobile-emissions-control-catalysts.html"
    },
    //------------------------------------- PRODUTOS SISTEMA DE EXAUSTÃO -------------------------------------
    
    
    
    
    //------------------------------------- PRODUTOS PINTURA -------------------------------------
    {
        id: 29,
        filtro: ['Pintura'],
        imagem: gardostrip,
        nome: 'Gardostrip® P',
        desc: 'O GARDOSTRIP P 7964 é um líquido concentrado de alto desempenho, perfeito para a limpeza de circuitos de tintas à base de água, ideal para uso em variados sistemas de pintura.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Ficha%20T%C3%A9cnica%20-%20Gardostrip%C2%AE%20P.pdf',
        tealiumValue: "Ficha_Técnica_-_Gardostrip®_P.pdf"
    },
    {
        id: 30,
        filtro: ['Pintura'],
        imagem: oxsilan,
        nome: 'Oxsilan®',
        desc: 'OXSILAN é uma inovação que veio para revolucionar os pré-tratamentos para pintura. Este produto substitui os sistemas convencionais, como fosfato de ferro, fosfato de zinco e soluções de cromo, oferecendo um desempenho superior. Com o OXSILAN, a maioria dos sistemas de pintura atinge um nível de performance inigualável.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Ficha%20T%C3%A9cnica%20-%20Oxsilan%C2%AE.pdf',
        tealiumValue: "Ficha_Técnica_-_Oxsilan®.pdf"
    },
    {
        id: 32,
        filtro: ['Pintura'],
        imagem: cathoguard580,
        nome: 'CathoGuard® 580 e 800 RE',
        desc: 'CathoGuard® é uma marca da BASF que oferece proteção contra a corrosão de alto desempenho, e é a marca líder no segmento automotivo global. CathoGuard® 800 RE, é uma tecnologia de alta eficiência em proteção contra corrosão, com consumo reduzido por carroceria, reduzindo volumes de embalagem e transporte. Para o segmento de pintura de peças industriais e automotivas, o CathoGuard® 580 oferece uma excelente proteção contra corrosão e proteção de borda aprimorada, além de alto poder de penetração e cobertura de superfícies ásperas e redução de ruídos em peças de assento.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Ficha%20T%C3%A9cnica%20-%20CathoGuard%C2%AE%20580%20e%20800%20RE%20.pdf',
        tealiumValue: "Ficha_Técnica_-_CathoGuard®_580_e_800_RE_.pdf"
    },
    {
        id: 31,
        filtro: ['Pintura'],
        imagem: cathoguard,
        nome: 'CathoGuard® 800 e 840 Low Bake',
        desc: 'CathoGuard® 800 e 840 são tintas de proteção contra corrosão, eficientes e amigáveis ao meio ambiente, promovendo excelente qualidade de superfície e alta estabilidade. São ideais para quaisquer processos de aplicação, inclusive aqueles que dispensam a etapa do primer. O CathoGuard® 840 é especialmente eficaz em áreas do corpo que atingem temperaturas mais baixas, já que permite condições mais baixas de cura.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Ficha%20T%C3%A9cnica%20-%20CathoGuard%C2%AE%20800%20e%20840%20Low%20Bake%20.pdf',
        tealiumValue: "Ficha_Técnica_-_CathoGuard®_800_e_840_Low_Bake_.pdf"
    },
    //------------------------------------- PRODUTOS PINTURA -------------------------------------
    
    

    //------------------------------------- PRODUTOS POLÍMEROS -------------------------------------
    {
        id: 15,
        filtro: ['Polímeros'],
        imagem: acrodur,
        nome: 'Acrodur E 950 L',
        desc: 'Acrodur E 950 L é uma dispersão voltada para a produção de compósitos sustentáveis no campo automotivo.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/AcrodurE950L.PDF',
        tealiumValue: "AcrodurE950L.PDF"
    },
    {
        id: 16,
        filtro: ['Polímeros'],
        imagem: acronal,
        nome: 'Acronal',
        desc: 'Ligante polimérico para sistemas de amortecimento base água de alto desempenho, cobrindo todas as necessidades dos diferentes compostos de amortecimento de vibração. Produtos disponíveis: Acronal DS 3502, Acronal 3612, Acronal 3626 e Acronal 3902.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/Ficha%20Tecnica%20(Acronal%20-%204%20Produtos).pdf',
        tealiumValue: "Ficha_Tecnica_(Acronal_-_4_Produtos).pdf"
    },
    {
        id: 7,
        filtro: ['Polímeros'],
        imagem: ecovio,
        nome: 'Ecovio®',
        desc: 'ecovio® é um bioplástico da BASF de alta qualidade e versatilidade. Ele é amplamente utilizado em filmes plásticos, desde sacos de lixo orgânico até embalagens para frutas e vegetais.',
        ficha: 'https://promo.basf.com/campaign/tasa/fichas-tecnicas/ecovio%C2%AE%20-%20Brochure%20-%20General.pdf',
        tealiumValue: "ecovio®_-_Brochure_-_General.pdf"
    },
    //------------------------------------- PRODUTOS POLÍMEROS -------------------------------------









   
]