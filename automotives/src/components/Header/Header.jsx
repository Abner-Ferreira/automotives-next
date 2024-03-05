import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import './hamburger.css';
import styles from './header.module.css';


export default function Header() {

    const [clicado, setClicado] = useState(false)



    function clicouHeader() {
        setClicado(!clicado)
    }


    const pathname = usePathname()

    return (
        <>
            <header className={styles.containerHeader}>

                <div className={styles.navMobile}>

                    <div className={styles.bannerHeaderMobile}></div>
                    <Navbar expand={false} className="bg-body-tertiary mb-3" expanded={clicado} onClick={clicouHeader}  >
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                            <Navbar.Brand href="#" >Soluções para Mobilidade</Navbar.Brand>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${false}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                                placement="start"
                            >

                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`} dir='left'>
                                        Soluções para Mobilidade
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 m-4" onClick={() => clicouHeader}>
                                            <Link href="/">
                                                <span className={pathname === "/" ? styles.ativado : styles.desativado}>HOME</span>
                                            </Link>

                                            <Link href="/mobilidade/produtos" onClick={() => clicouHeader}>
                                                <span className={pathname === "/mobilidade/produtos" ? styles.ativado : styles.desativado}>PRODUTOS</span>
                                            </Link>
                                        
                                            <Link href="/mobilidade/conteudos" onClick={() => clicouHeader}>
                                                <span className={pathname === "/mobilidade/conteudos" ? styles.ativado : styles.desativado}>CONTEÚDOS</span>
                                            </Link>
                                        
                                            <Link href="/mobilidade/circularidade" onClick={() => clicouHeader}>
                                                <span className={pathname === "/mobilidade-circularidade" ? styles.ativado : styles.desativado}>CIRCULARIDADE</span>
                                            </Link>

                                    </Nav>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>

                </div>

                <nav className={styles.navDesktop}>
                    <div className={styles.bannerHeader}></div>
                    <ul className={styles.destkopMenuList}>

                        {/* Menu da HOME */}
                        <li>
                            <Link href="/" >
                                <span className={pathname === "/" ? styles.ativado : styles.desativado}>HOME</span>
                            </Link>
                        </li>

                        {/* Menu da PRODUTOS */}
                        <li>
                            <Link href="/mobilidade/produtos" >
                                <span className={pathname === "/mobilidade/produtos" ? styles.ativado : styles.desativado}>PRODUTOS</span>
                            </Link>
                        </li>

                        {/* Menu da CONTEÚDOS */}
                        <li>
                            <Link href="/mobilidade/conteudos">
                                <span className={pathname === "/mobilidade/conteudos" ? styles.ativado : styles.desativado}>CONTEÚDOS</span>
                            </Link>
                        </li>

                        {/* Menu da CIRCULAÍ */}
                        <li>
                            <Link href="/mobilidade/circularidade">
                                <span className={pathname === "/mobilidade/circularidade" ? styles.ativado : styles.desativado}>PROGRAMA DE CIRCULARIDADE</span>
                            </Link>
                        </li>


                    </ul>
                </nav>
            </header>
        </>
    )
}
