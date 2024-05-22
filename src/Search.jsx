import React, { useEffect, useState } from 'react'



const Search = ({ data, setData, sortData }) => {
    const [name, setName] = useState("");

    useEffect(() => {
        let searchData = (name) => {

            if (name === "")
                fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((d) => sortData(d, 1));


            console.log(name)
            let newData = data.filter((d) => {
                console.log(d)
                return ((d.name.common == name) || (d.name.official == name) || (d.region == name) || (d.subregion == name));
            })

            console.log("Data:", newData)

            setData(newData);
        }

        let timer = setTimeout(() => {
            searchData(name);
        }, 4000);

        return (() => clearTimeout(timer))

    }, [name])

    let handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div className="search lg:w-[30%] w-3/4 flex items-center justify-center">
            <img className='relative left-6 gap-2' src="Search.svg" alt="" srcset="" />
            <input value={name} onChange={handleChange} className='w-full bg-[#282B30] px-8 py-1 rounded-md text-xs lg:text-sm' type="text" placeholder='Search by Name, Region, Subregion' />
        </div>

    )
}

export default Search
