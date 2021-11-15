import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Intro from "./components/intro/intro"
import ProductList from "./components/productList/productList"


const App = () => {
    return (
        <div>
            <Intro />
            <About />
            <ProductList />
            <Contact/>
        </div>
    )
}

export default App