
import NavBar from "../components/Nav"
import Footer from "../components/Footer"
import BrowseGrid from "../components/CakeGrid"
import HomeButton from "../components/HomeButton"
export default function Cake(){
    return (
        <div>

        <NavBar></NavBar>
        <h1 className="text-center text-3xl py-7">Cake Selections</h1>
        <HomeButton></HomeButton>
        <BrowseGrid></BrowseGrid>
        <Footer></Footer>
        </div>
        
    )
}