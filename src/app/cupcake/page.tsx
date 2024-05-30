
import NavBar from "../components/Nav"
import BrowserGrid from "../components/CupcakeGrid"
import Footer from "../components/Footer"
import HomeButton from "../components/HomeButton"
export default function Cupcake(){
    return (
        <div>

        <NavBar></NavBar>
        <h1 className="text-center text-3xl py-7">Cupcake Selection</h1>
        <div>
            <HomeButton></HomeButton>
            
        </div>
        <BrowserGrid></BrowserGrid>
        <Footer></Footer>



        </div>
        
    )
}