import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";





const ADDScreen =(props)=>{
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    const displayHotelByIDS = useStore((store)=>store.displayHotelByIDS)
    const {loading ,response,error} = displayHotelByIDS;
//     useEffect(() => {
//      dispatch(getProfile())
//    }, [])

useEffect(() => {
    if (response && response.status === 200) {
      setItems(response.data);
    } else if (error) {
      console.log(error);
      alert("error in cart list Found!!");
    }
  }, [loading, response, error]);

    // useEffect(() => {}, [error, response, loading])
    // function onDelete(id) {
    //     setItems(items.filter((item) => item.id !== id));
    //     dispatch(removecartitem(id));
    //   }
   
return(
    <div>


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
     <th>ownerId</th>
     <th>locationId</th>
     
   </tr>
 </thead>
 <tbody>
   {response &&
     response.data &&
     response.data.length > 0 &&
     items.map((i) => (
        <tr key={i.id} className="data">
          <td>{i.hotel_id}</td>
          <td>{i.name}</td>
          <td>{i.ownerId}</td>
          <td>{i.locationId}</td>
         
          <td>
            <button
              className="btn btn-danger"
            //   onClick={() => onDelete(i.id)}
            >
              {" "}
              Delete
            </button>
          </td>
        </tr>
      ))}
 </tbody>
</table>
</div>
)
}


export default ADDScreen;

