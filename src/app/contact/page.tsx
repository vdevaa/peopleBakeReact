
import NavBar from "../components/Nav"
import Footer from "../components/Footer"

export default function Contact(){
    return (
        <div className="bg-[url(https://www.wallpaperboulevard.com/Images/product/light-pink-and-white-diagonal-stripe-pr-shqh-l.jpg)] bg-cover">

            <NavBar></NavBar>
            <div className="bg-[url(https://www.wallpaperboulevard.com/Images/product/light-pink-and-white-diagonal-stripe-pr-shqh-l.jpg)] bg-cover m-0 p-0 min-h-[100vh]">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-center text-6xl font-bold mt-28 mb-7">Contact Us</h1>

                    <div className="bg-rose-300 w-2/5 p-6 rounded-xl shadow-lg">
                        <form>
                            <div className="my-3 mx-auto">
                                <input type="text" className="w-full mt-2 p-4 outline-none border-none rounded-lg" placeholder="Enter your name"></input>
                            </div>

                            <div className="my-3 mx-auto">
                                <input type = 'text' className = 'w-full mt-2 p-6 outline-none border-none rounded-lg'placeholder="Enter an email"></input>
                            </div>

                            <div className="my-3 mx-auto">
                                <input type = 'password' className = 'w-full mt-2 p-6 outline-none border-none rounded-lg'placeholder="Enter an password"></input>
                            </div>

                            <div className="my-3 mx-auto">
                                <textarea className="w-full  h-36 mt-2 p-4 outline-none border-none  rounded-lg" placeholder="Enter a message"></textarea>
                            </div>
                            <button className="w-full p-3 mt-2 outline-none border-none tracking-wide transition-all rounded-lg hover:bg-rose-400">
                                Submit
                            </button>
                            
                        </form>
                    </div>
                    <h1 className="text-rose-500 mt-16 text-xl"> We will get back to you soon!</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
        
    )
}