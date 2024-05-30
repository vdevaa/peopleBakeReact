
import NavBar from "../components/Nav"
import Footer from "../components/Footer"
import BrowseGrid from "../components/DoughnutGrid"
import HomeButton from "../components/HomeButton"

export default function Doughnut(){
    return (
        <div>

        <NavBar></NavBar>
        <h1 className="text-center text-3xl py-7">Doughnut Selection!</h1>
        <HomeButton></HomeButton>
        <BrowseGrid></BrowseGrid>
        <Footer></Footer>
        </div>
        
    )
}