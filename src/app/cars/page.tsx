import React from 'react'

const Cars = () => {
  
    const carsData = [
        {id: 1, name: "Land Rover Defender", description: "Luxury cars,Mass-Market Cars 1937-Present", image: "/car_1.jpg", price:255.80 },
        {id: 2, name: "Mercedes-Benz GLA", description: "Mass-Market Cars 1967-Present.", image: "/car_2.jpg",  price:255.80},
        {id: 3, name: "BMW", description: "BMW Luxury Vehicles 1916-Present.", image: "/car_3.jpg",  price:237.80},
        {id: 4, name: "Honda ", description: "Mass-Market Cars 1948-Present.", image: "/car_4.jpg", price:160.80},
        {id: 5, name: "Toyota RAV4", description: "Mass-Market Cars 1903-Present.", image: "/car_5.jpg", price:144.40},
        {id: 6, name: "Ford F-Series", description: "Mass-Market Cars 1937-Present.", image: "/car_6.jpg", price:130.20},
    ]

    return (
    <div>
      <div className="cars"> 
        {carsData.map((car) => (
            <div key={car.id} className='cars-card'>
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <h3 className='price'>${car.price}</h3>

                <button>Want to Purchase? </button>
            </div>
        ))}  
      </div>
    </div>
  )
}

export default Cars
