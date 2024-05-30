
import NavBar from "../components/Nav"
import Footer from "../components/Footer"
export default function Services(){
    return (
        <div className="bg-[url(https://www.wallpaperboulevard.com/Images/product/light-pink-and-white-diagonal-stripe-pr-shqh-l.jpg)] bg-cover">
        <NavBar></NavBar>
        <section className = 'w-screen mt-12'>
        
        <h5 className="font-semibold text-4xl text-center py-1">Our Services</h5>
            
            <div className = 'flex flex-1 justify-start items-center lg:flex-row sm:flex-col py-4'>
                
                <div className="flex justify-center mr-10">
                    <img className="w-full sm:w-1/2 md:w-1/2 py-11 scale-125" src ="https://cdn.pixabay.com/photo/2016/11/29/08/24/bakery-1868396_1280.jpg"></img>
                </div>

                <p className="w-3/5 text-center text-2xl mr-11 mt-8 pr-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae quasi pariatur porro at, numquam ullam nam quisquam, harum necessitatibus perferendis, soluta eligendi id ipsam magnam molestias quibusdam consectetur voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas praesentium totam numquam sit recusandae, et consequuntur aliquam! Labore nobis minus quae delectus maiores possimus ex autem eius. Suscipit, magnam perferendis.</p>

            </div>
            <div className = 'flex flex-1 justify-start items-center lg:flex-row sm:flex-col'>
                
                <p className="w-3/5 text-center text-2xl mr-11 mt-8 pr-11 ml-11 lg:order-1 sm:order-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae quasi pariatur porro at, numquam ullam nam quisquam, harum necessitatibus perferendis, soluta eligendi id ipsam magnam molestias quibusdam consectetur voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas praesentium totam numquam sit recusandae, et consequuntur aliquam! Labore nobis minus quae delectus maiores possimus ex autem eius. Suscipit, magnam perferendis.</p>
                
                <div className="flex justify-center lg:order-2 sm:order-1">
                    <img className="w-full sm:w-1/2 md:w-[500px] py-5" src ="https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg"></img>
                </div>
            </div>

            <section className="flex justify-center items-center py-4">
                <a className = 'hover:-translate-y-1 transition' href="/"> <button className = 'border-rose-300 border-2 p-2 rounded-md scale-110'>Back Home</button></a>
            </section>

        </section>
        <br></br>
        <Footer></Footer>
        </div>
        
        
    )
}