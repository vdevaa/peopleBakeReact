
import NavBar from "../components/Nav"
import Footer from "../components/Footer"
import BrowseGrid from "../components/DanishGrid"
import HomeButton from "../components/HomeButton"
export default function Danish(){
    return (
        <div>

        <NavBar></NavBar>
        <h1 className="text-center text-3xl py-7">Danish Selection!</h1>
        <HomeButton></HomeButton>
        <BrowseGrid></BrowseGrid>
        <Footer></Footer>
        </div>
        
    )
}