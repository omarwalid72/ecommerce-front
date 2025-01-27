import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import styles from './style.module.css'
import { Header, Footer } from "@components/common"

const{container, wrapper} = styles
const Mainlayout = () => {
  return (
    <Container className={container}>
        <Header />
        <div className={wrapper}>
            <Outlet />
        </div>
        <Footer />
    </Container>
  )
}

export default Mainlayout