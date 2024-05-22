import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Country from './Country'
import Search from './Search'
import Page from './Page'


function App() {
  const [data, setData] = useState([]);
  const [op, setOp] = useState(1);
  const [reg, setReg] = useState([]);
  const [selected, setSelected] = useState([]);
  const [count, setCount] = useState(data.length);
  const [country, setCountry] = useState({});
  const [change , setChange] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/India").then((res) => res.json()).then((d) => setCountry(d[0]))
 }, [])
  

  let sortData = (data, p) => {
    console.log(data)
    let sorted = [];
    if (p === 1) {
      sorted = [...data].sort((a, b) =>
        a.population < b.population ? 1 : -1
      )
    }
    else if (p == 2) {
      sorted = [...data].sort((a, b) =>
        a.area < b.area ? 1 : -1
      )
    }
    setData(sorted);
  }

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((d) => sortData(d, op));

  },[])



  let handleChange = (e) => {
    let val = e.target.value;
    if (val === "population")
      sortData(data, 1);
    else
      sortData(data, 2);
  }

  let handleClick = ((e) => {
    if (!e.target.classList.contains("bg-[#282B30]")) {
      e.target.classList.add("bg-[#282B30]");
      {
        console.log(e.target.id)
        setReg([...reg, e.target.id]);

        // sortData(data,op)

      }
    }

    else {
      e.target.classList.remove("bg-[#282B30]");
      {
        console.log(e.target.id)
        setReg([...reg].filter((item) => item != e.target.id));

        // sortData(data,op)

      }
    }

  })

  let handleSelect = (e) => {
    const activeData = e.target.checked;

    console.log(e.target.value)
    if (activeData == true)
      setSelected(oldData => [...oldData, e.target.value]);
    else
      setSelected(selected.filter(value => value != e.target.value))
  }

  


  return (


    <>
      <div className="contain bg-[#1B1D1F] w-full  min-h-[100vh] relative  ">
        <div className="header bg-[url(assets/hero-image-wr.jpg)] w-full h-[30vh] bg-cover bg-bottom bg-no-repeat flex items-center justify-center">
          <img src="public/Logo.svg" alt="" />
        </div>
  {     !change && <div className="main w-[90vw] min-h-[70vh] rounded-lg z-10 m-auto relative bottom-10 bg-[#1B1D1F] p-3">

          <div className="top flex w-full items-center justify-between text-[#D2D5DA] text-center">
            <span className='text-center text-sm text-[#6C727F]'>Found {count} countries</span>
            <Search data={data} setData={setData} sortData={sortData}/>
          </div>


          <div className="main2 text-white lg:flex-row flex-col w-full flex gap-2 mt-4">
            <div className="sidebar lg:w-1/4 w-full   flex gap-6 flex-col p-2">
              <div className="select text-[#6C727F] flex flex-col gap-2">

                <label className='text-xs' htmlFor="select">Sort By</label>
                <select onChange={handleChange} className='text-[#D2D5DA] bg-[#1B1D1F]' name="" id="">
                  <option value="population">Population</option>
                  <option  value="area">Area</option>
                </select>
              </div>

              <div className="region ">
                <span className='mb-4'>Region</span>
                <div className="buttons flex gap-4 flex-wrap">
                  <button id="Americas" onClick={handleClick} className=' text-[#D2D5DA] p-2 rounded-md'>Americas</button>
                  <button id="Antarctic" onClick={handleClick} className=' text-[#D2D5DA] p-2 rounded-md'>Antarctic</button>
                  <button id="Africa" onClick={handleClick} className=' text-[#D2D5DA] p-2 rounded-md'>Africa</button>
                  <button id="Asia" onClick={handleClick} className=' text-[#D2D5DA] p-2 rounded-md'>Asia</button>
                  <button id="Europe" onClick={handleClick} className=' text-[#D2D5DA] p-2 rounded-md'>Europe</button>
                  <button id="Oceania" onClick={handleClick} className=' text-[#D2D5DA] p-2 rounded-md'>Oceania</button>
                </div>
              </div>

              <div className="checkbox flex flex-col gap-1  justify-center">
                <span className='text-[#6C727F]'>Status</span>
                <div className="c1 ">
                  <input value="UN" type="checkbox" name="" id="c1"  onChange={handleSelect} />
                  <label className='text-[#D2D5DA] mx-2' mx-2 htmlFor="c1">Member of the United Nations</label>
                </div>
                <div className="c2 ">
                  <input value="independent" onChange={handleSelect} type="checkbox" name="" id="c1" />
                  <label className='text-[#D2D5DA] mx-2' htmlFor="c2">Independent</label>
                </div>
              </div>
            </div>

            <div className="country lg:w-[80%] w-full py-4 px-10  ">
              <div className="items text-white flex flex-col gap-5 ">

              <div className="header grid grid-cols-5 gap-x-14 gap-y-4 text-[#6C727F] text-xs ">
                  <span className=''>Flag</span>
                  <span className=''>Name</span>
                  <span className=''>Population</span>
                  <span className=''>Area (km²)</span>
                  <span className=''>Region</span>
                </div>
                <div className='col-span-5 w-full bg-[#6C727F] h-[1px] text-[#6C727F]  '></div>



                <Country data={data} reg={reg} selected={selected}   setCount={setCount}  country={country} setCountry ={setCountry} setChange={setChange}/> 
                

              </div>

            </div>


          </div>
        </div>}

        {change &&<Page data={data} country={country} setCountry={setCountry}/>}

      </div>

      


    </>
  )
}

export default App
