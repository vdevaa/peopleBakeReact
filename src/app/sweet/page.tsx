
import NavBar from "../components/Nav"
import BrowseGrid from "../components/SweetGrid"
import Footer from "../components/Footer"
import HomeButton from "../components/HomeButton"

export default function Sweet(){
    return (
        <div>

        <NavBar></NavBar>
        <h1 className="text-center text-3xl py-7">Sweet Selection</h1>
        <HomeButton></HomeButton>
        <BrowseGrid></BrowseGrid>
        <Footer></Footer>
        </div>
        
    )
}