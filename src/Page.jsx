import React from 'react'
import { useEffect } from 'react'
import Country from './Country'

const Page = ({data,country,setCountry}) => {


  return (
  country.name && <div className='page2 px-10 w-full lg:w-1/2 min-h-[70vw] bg-[#282B30] relative bottom-10 p-3 rounded-lg z-10 text-white m-auto flex flex-col items-center gap-5 '>
          <div className="img relative bottom-10 ">
            <img className='rounded-md' src={country.flags.svg} alt="" srcset="" />
          </div>
          <div className="details flex  flex-col items-center justify-center">
            <span className='text-3xl'>{country.name.common}</span>
            <span>{country.name.official}</span>
          </div>

          <div className="others flex gap-8">
            <span className='bg-[#1B1D1F] p-3 px-4 rounded-xl text-[#D2D5DA]'>Population | {country.population.toLocaleString()}</span>
            <span className='bg-[#1B1D1F] p-3 px-6 rounded-xl text-[#D2D5DA]'>Area (km²) | {country.area.toLocaleString()}</span>
          </div>

          <div className="list-items w-full flex gap-2 flex-col  ">
            <div className='w-full h-[1px]  bg-[#1B1D1F]'></div>
            <div className=' w-full flex items-center justify-between'>
              <span className='text-[#D2D5DA]'>Captial</span>
              {country.capital &&<span>{country.capital}</span>}
            </div>

            <div className='w-full h-[1px]  bg-[#1B1D1F]'></div>
            <div className=' w-full flex items-center justify-between'>
              <span className='text-[#D2D5DA]'> Subregion</span>
              <span >{country.subregion}</span>
            </div>

            <div className='w-full h-[1px]  bg-[#1B1D1F]'></div>
            <div className=' w-full flex items-center justify-between'>
              <span className='text-[#D2D5DA]'>Language</span>
              <span>{country.languages && Object.values(country.languages).join(',')}</span>
            </div>

            <div className='w-full h-[1px]  bg-[#1B1D1F]'></div>
            <div className=' w-full flex items-center justify-between'>
              <span className='text-[#D2D5DA]'>Currencies</span>
              <span>{country.currencies && Object.values(country.currencies)[0].name}</span>
            </div>

            <div className='w-full h-[1px]  bg-[#1B1D1F]'></div>
            <div className=' w-full flex items-center justify-between'>
              <span className='text-[#D2D5DA]'>Continents</span>
              <span>{country.continents}</span>
            </div>
            <div className='w-full h-[1px]  bg-[#1B1D1F]'></div>

            <div className="neighbor ">
              <div className='text-[#D2D5DA] mt-3' >Neighbouring Countries</div>
              <div className='flex gap-2 mt-4 flex-wrap'>

                {
                  country.borders && data.filter((item) => country.borders.includes(item.cca3)).map((d) => {
                    return (<div className="c1 text-sm">
                      <img className='rounded-sm w-[40px]' src={d.flags.svg} alt="" srcset="" />
                      <span className='#D2D5DA'>{d.name.common}</span>
                    </div>
                    )
                  })

                }

                {/* <div className="c1">
                  <img className='rounded-sm w-[90px]' src="https://flagcdn.com/w320/in.png" alt="" srcset="" />
                  <span className='#D2D5DA'>India</span>
                </div> */}
              </div>

            </div>


          </div>

        </div>  
  )
}

export default Page
