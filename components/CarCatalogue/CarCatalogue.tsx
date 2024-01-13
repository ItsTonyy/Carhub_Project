import React from 'react'
import { CustomFilter, SearchBar, CarCard } from '..'
import { fetchCars } from '../../utils'
import { HomeProps } from '../../types'

const CarCatalogue = async ({ searchParams }: HomeProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <div className='mt-12 padding-x padding-y w-max' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>

      <div className='home__filters'>
        <SearchBar />

        <div className='home__filter-container'>
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>No Results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </div>
  )
}

export default CarCatalogue
