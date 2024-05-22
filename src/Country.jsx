import React from 'react'
import List from './List'
import { useState } from 'react';


const Country = ({ data, reg, selected,setCount,country,setCountry,setChange }) => {

  

   if (reg.length == 0)
    {
      if (selected.includes("independent") && selected.includes("UN")) 
        {
          const item= data.filter(item => ( item.independent == true && item.unMember==true)).map((d) => (<div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>))
          setTimeout(() => {
            setCount(item.length);
          }, 500);
          return item;
        }
        else if (selected.includes("UN")) {
          const item=  data.filter(item => (  item.unMember == true)).map((d) => (<div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>))
          setTimeout(()=>{
            setCount(item.length);
          })
          return item;
        }

        else if (selected.includes("independent")) {
          const item= data.filter(item => ( item.independent == true)).map((d) => (<div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>))
          setTimeout(() => {
            setCount(item.length);
          }, 500);
          return item;
        }

        else
        {
          const item = data.map((d) => <div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>)
          setTimeout(()=>{
            setCount(item.length);
          },500)
          return item;
        }

    }
  else if (reg.length) {

    if (selected.includes("independent") && selected.includes("UN")) 
      {
        const item= data.filter(item => (reg.includes(item.region) && item.independent == true && item.unMember==true)).map((d) => (<div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>))
        setTimeout(() => {
          setCount(item.length);
        }, 500);
        return item;
      }
    else if (selected.includes("UN")) {
      const item=  data.filter(item => (reg.includes(item.region) && item.unMember == true)).map((d) => (<div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>))
      setTimeout(()=>{
        setCount(item.length);
      })
      return item;
    }

    else if (selected.includes("independent")) {
      const item= data.filter(item => (reg.includes(item.region) && item.independent == true)).map((d) => (<div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>))
      setTimeout(() => {
        setCount(item.length);
      }, 500);
      return item;
    }

    else
    {
      const item = data.filter((item)=>reg.includes(item.region)).map((d) => <div key={d.name.common}><List d={d} country={country} setCountry={setCountry} setChange={setChange} /></div>)
      setTimeout(()=>{
        setCount(item.length);
      },500)
      return item;
    }
  }




  // return (
  //   <>
  //     {
  //       reg.length ? data.filter((item) => {
  //         return (reg.includes(item.region)
  //         )
  //       }).map((d) => {

  //         return (
  //           <List d={d} country={country} setCountry={setCountry} setChange={setChange} />
  //         )
  //       }) : data.map((d) => {
  //         return (
  //           <List d={d} country={country} setCountry={setCountry} setChange={setChange} />
  //         )
  //       })

  //     }
  //   </>
  // )
}

export default Country
