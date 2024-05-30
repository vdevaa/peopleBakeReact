import React from 'react'

const MainComp = () => {
  return (
    <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto grid grid-cols-5 grid-rows-5 gap-4">
        <div className="bg-pink-200 col-span-2 row-span-5 border 2 rounded-xl">
            <h2>Welcome to People Bake Group</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos quia est velit accusamus perspiciatis magni cum labore dolore accusantium itaque, nisi delectus ex debitis? Pariatur dolor inventore veritatis ipsum!</p>
        </div>
        <div className="bg-violet-300 row-span-5 col-start-3 border 2 rounded-xl">
            <ol className="text-center mx-auto">
                Today's Specials
                <li>Red Velvet Cupcake</li>
                <li>Classic Butter Croissant</li>
                <li>Cheese Danish</li>
                <li>Banana Nut Muffin</li>
                <li>Mixed Berry Tart</li>
            </ol>
        </div>
    </div>
</div>
    
  )
}

export default MainComp