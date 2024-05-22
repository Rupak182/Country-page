import React from 'react'




const List = ({d,country,setCountry,setChange}) => {
  let handleClick=(e)=>{
    setChange(true);
      fetch(`https://restcountries.com/v3.1/name/${d.name.common}?fullText=true`).then((res) => res.json()).then((d) => setCountry(d[0]))
    }

    const mql = window.matchMedia('(max-width: 800px)');

    let mobileview = mql.matches

    if(mobileview)
      {
        return (
          <>
            <div className="header grid grid-cols-5 gap-x-28 gap-y-4 text-[#6C727F] text-xs ">
                  <span className=''>Flag</span>
                  <span className=''>Name</span>
                  <span className=''>Population</span>
                  <span className=''>Area (km²)</span>
                </div>

            <div onClick={handleClick} key={d.name.common} className="grid grid-cols-5 gap-x-28 gap-y-4 text-white text-sm  lg:text-base" >
                        <span><img src={d.flags.svg} alt="" srcset="" /></span>
                        <span>{d.name.common}</span>
                        <span>{d.population.toLocaleString()}</span>
                        <span>{d.area.toLocaleString()}</span>
            </div>
          </>
        )
      }

      else
      {
        return (
          <>


            <div onClick={handleClick} key={d.name.common} className="grid grid-cols-5 gap-x-14 gap-y-4 text-white text-sm  lg:text-base" >
                        <span><img src={d.flags.svg} alt="" srcset="" /></span>
                        <span>{d.name.common}</span>
                        <span>{d.population.toLocaleString()}</span>
                        <span>{d.area.toLocaleString()}</span>
                        <span>{d.region}</span>
            </div>
          </>
        )
      }


}

export default List
