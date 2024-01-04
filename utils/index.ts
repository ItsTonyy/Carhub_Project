export async function fetchCars() {
  const headers =  {
		'X-RapidAPI-Key': '6f2d3457f1msh675b6d44f4c2f42p12daefjsn328e0d079d4f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
    headers: headers
  })

  const result = await response.json()

  return result
}