import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="main">
            <section className="header-main">
                <Header />
            </section>
            <section className="content-main">
                <Outlet />
            </section>
            <footer className="footer-main">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout