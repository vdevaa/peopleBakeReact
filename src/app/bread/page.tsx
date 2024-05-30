
import NavBar from "../components/Nav"
import BrowseGrid from "../components/BreadGrid"
import Footer from "../components/Footer"
import HomeButton from "../components/HomeButton"

export default function Bread(){
    return (
        <div>

        <NavBar></NavBar>
        <h1 className="text-center text-3xl py-7">Bread Selections</h1>
        <HomeButton></HomeButton>
        <BrowseGrid></BrowseGrid>
        <Footer></Footer>

        </div>
        
    )
}