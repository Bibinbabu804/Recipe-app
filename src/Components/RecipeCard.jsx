import { Heart, HeartPulse, Soup } from 'lucide-react'
import React, { useState } from 'react'

const RecipeCard = ({ recipes,bg,badge }) => {

    const [isFavorite,setIsFavorite]=useState(localStorage.getItem('favorites')?.includes(recipes.label))

    const getTwoValuesFromArray=(arr)=>{
        return [arr[0],arr[1]]
      }
  // Ensuring healthLabels exist before mapping over them
  const healthLabels = getTwoValuesFromArray(recipes.healthLabels) || []

  // Logging the recipes object to check its structure
  console.log({ recipes })

 
  const addRecipeToFavorites = () => {
    let favorites =JSON.parse(localStorage.getItem('favorites'))  || []
    const isRecipeAlreadyInFavorites =favorites.some((fav)=>fav.label===recipes.label)

    if(isRecipeAlreadyInFavorites){
        favorites=favorites.filter((fav)=>fav.label !==recipes.label)
        setIsFavorite(false)


    }else{
        favorites.push(recipes)
        setIsFavorite(true)
    }

    localStorage.setItem('favorites',JSON.stringify(favorites))


  }

 




  return (
    <div>
      <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
        <a href={`https://www.youtube.com/results?search_query=${recipes.label} recipe`}
        target="_blank"
         className='relative h-32'>
            <div className='skeleton absolute inset-0'/>
          <img
            src={recipes?.image || 'default-image-url.jpg'} // Fallback to a default image
            alt={recipes?.label || 'recipe img'} // Fallback for alt text
            className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
            onLoad={(e) =>{

                e.currentTarget.style.opacity=1
                e.currentTarget.previousElementSibling.style.display='none'


            }}
          />
          <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
            <Soup size={16} /> {recipes?.yield ? `${recipes.yield} servings` : 'N/A servings'}
          </div>

          <div className='absolute top-2 right-2 bg-white rounded-full p-3 cursor-pointer' onClick={(e) =>{
            e.preventDefault()
            addRecipeToFavorites()


          }}>
            {!isFavorite &&<Heart size={16} className='hover:fill-red-500 hover:text-red-500' />}
         { isFavorite &&   <Heart size={16} className='fill-red-500 text-red-500' />}
          </div>
        </a>

        <div className='flex mt-1'>
          <p className='font-bold tracking-wide'>{recipes?.label || 'Unknown Recipe'}</p>
        </div>

        <p className='my-2'>
          {
            recipes?.cuisineType && recipes.cuisineType[0]
              ? recipes.cuisineType[0].charAt(0).toUpperCase() + recipes.cuisineType[0].slice(1) + ' Kitchen'
              : 'Unknown Kitchen'
          }
        </p>

        <div className='flex gap-2 mt-auto'>
          {
            // Check if healthLabels exist, then map over them
            healthLabels.length > 0 ? healthLabels.map((label, dex) => (
              <div key={dex} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
                <HeartPulse size={16} />
                <span className='text-sm tracking-tighter font-semibold'>{label}</span>
              </div>
            )) : (
              <div className='text-sm text-gray-500'>No health labels</div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
