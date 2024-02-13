"use client";
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
type CarsType ={
  name:string,
  price:number,
  color:string,
  year:number,
}
export default function Cars() {
  const [cars,setCars] =useState<Array<CarsType>>([])
  const [name,setName] =useState<string>("")
  const [price,setPrice] =useState<number>(0)
  const [color,setColor] =useState<string>("")
  const [year,setYear] =useState<number>(0)
  const changeName = (e) =>{
    setName(e.target.value)
    }
    const changePrice = (e) =>{
      setPrice(e.target.value)
    }
    const changeColor = (e) =>{
      setColor(e.target.value)
    }
    const changeYear = (e) =>{
    setYear(e.target.value)
    }
    const addCars = () => {
      let payload = {
        name,
        price,
        color,
        year
      }
      setCars([...cars ,{...payload}])
      }
      const deletUser = (index) =>{
        cars.splice(index,1)
        setCars([...cars])
      }
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            cars.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
                <td>{item.year}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>deletUser(index)}>delete</button>
                </td>
              </tr>
            })
           }
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
            <form>
                <input type="text"className='form-control my-2' placeholder='Name' onChange={changeName} />
                <input type="number"className='form-control my-2' placeholder='Price' onChange={changePrice} />
                <input type="text"className='form-control my-2' placeholder='Color' onChange={changeColor} />
                <input type="number"className='form-control my-2' placeholder='Year' onChange={changeYear} />
            </form>
            <button  className='btn btn-info mt-2' onClick={addCars}>Add cars</button>
      </div>
    </div>
  </div>
  )
}
