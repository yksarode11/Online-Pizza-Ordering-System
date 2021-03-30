import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { displayHotels, displayHotelsById } from '../actions/userActions';
import {Link}   from "react-router-dom"

const DisplayHotelScreen = (props)=>{
    const dispatch = useDispatch();

 
    
    const getAllInformation = useSelector((store)=> store.displayhotel)
    const { error, response, loading } = getAllInformation 
    useEffect(() => {
    dispatch(displayHotels())
  }, [])

   useEffect(() => {}, [error, response, loading])

   const onBack= ()=>{
    props.history.push('/customer')
   }
   function onAdd(id) {
    dispatch(displayHotelsById(id));
  }
  
  function onNext() {
    props.history.push('/customer')

  }


   return(
       <div>
           <div>
      <button onClick={onBack} className="btn btn-primary float-end">
        Back
      </button>
      <Link to="/cart">
     <button onClick={onNext} className="btn btn-primary float-mid">Next</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
          {/* "hotel_id": 1,
        "name": "pizaavala",
        "ownerId": null,
        "locationId": null,
        "orders": [],
        "items": [] */}
            <th>Pizza_id</th>
            <th>name</th>
            <th>OutletId</th>
            <th>locationId</th>
            <th>items</th>
            <th>orders</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((note) => {
              return (
                <tr>
                  <td>{note.hotel_id}</td>
                  <td>{note.name}</td>
                  <td>{note.ownerId}</td>
                  <td>{note.locationId}</td>

                  <td>{note.items}</td>

                  <td>{note.orders}</td>

        
                  <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onAdd(note.hotel_id)}
                  >
                    {" "}
                    Add
                  </button>
                </td>

                  
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
       </div>
   )
}



export default DisplayHotelScreen