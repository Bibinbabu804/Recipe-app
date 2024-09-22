import React from 'react'
import RecipeCard from '../Components/RecipeCard'
import { getRandomColor } from '../lib/utis'

function FavortitesPage() {
  const favorites=JSON.parse(localStorage.getItem('favorites'))  || []

  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen  '>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl '>My Favorites</p>
        
         
          
          {favorites.length === 0 &&(
              <div className='h-[80vh] flex flex-col items-center gap-4'>
              <img src="/404.svg" alt="404.svg" className='h-3/4' />
           </div>
          )}




  
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {favorites.map((recipes)=>(

                <RecipeCard key={recipes.label} recipes={recipes} {...getRandomColor()}/>



              ))}

            </div>

        

      </div>



    </div>
  )
}

export default FavortitesPage