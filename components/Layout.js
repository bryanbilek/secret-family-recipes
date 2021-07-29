import Footer from './Footer'
import NavBar from './NavBar'
import Head from 'next/head'

function Layout({ children }) {
    return (
        <div>
            <div>
            <head>
                <title>Secret Family Recipes</title>
            </head>
            </div>
            <div>
            <NavBar />
            { children }
            <Footer />
            </div>
        </div>
    )
}

export default Layout
