import React from 'react'
import RecipeCard from '../Components/RecipeCard'

function FavortitesPage() {
  const fav=true
  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen  '>
      <div className='max-w-screen-lg mx-anto'>
        <p className='font-bold text-3xl md:text-5xl '>My Favorites</p>
        
           {!fav && (
            <div className='h-[80vh] flex flex-col items-center gap-4'>
               <img src="/404.svg" alt="404.svg" className='h-3/4' />
            </div>





           )}

           {fav && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>

            </div>

           )}

      </div>



    </div>
  )
}

export default FavortitesPage