
import NavBar from "../components/Nav"
import Footer from "../components/Footer"
export default function About(){
    return (
        <div className="bg-[url(https://www.wallpaperboulevard.com/Images/product/light-pink-and-white-diagonal-stripe-pr-shqh-l.jpg)] bg-cover">
        <NavBar></NavBar>
        <section className = 'w-screen mt-12'>
            <div className = 'flex flex-1 justify-start items-center flex-col gap-6'>
                <h5 className="font-semibold text-4xl">Our Story</h5>
                <div className="flex justify-center">
                    <img className="w-full sm:w-1/2 md:w-1/4 py-5" src ="https://cdn.pixabay.com/photo/2023/08/26/14/19/cupcake-8215179_1280.jpg"></img>
                </div>
                <p className="text-2xl uppercase font-light">People Bake Group</p>
                <p className="w-3/5 text-center text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae quasi pariatur porro at, numquam ullam nam quisquam, harum necessitatibus perferendis, soluta eligendi id ipsam magnam molestias quibusdam consectetur voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas praesentium totam numquam sit recusandae, et consequuntur aliquam! Labore nobis minus quae delectus maiores possimus ex autem eius. Suscipit, magnam perferendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sunt iure vero odio, optio quas nulla doloribus, voluptatem commodi enim molestias doloremque adipisci aliquid, dolorem soluta ullam amet est? Enim.</p>
                <a className = 'hover:-translate-y-1 transition' href="/"> <button className = 'border-rose-300 border-2 p-2 rounded-md scale-110'>Back Home</button></a>
            </div>
            
        </section>
        <br></br>
        <Footer></Footer>
        </div>
        
        
    )
}