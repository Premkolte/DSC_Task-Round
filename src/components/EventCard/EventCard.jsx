// import "./EventCard.css"

// const EventCard = ({id,heading,location,date,img,description}) =>{
//     const {year,month} = date;
//     return(
//         <>
//             <div className="card">
//                 <div className="card-content">
//                     <h1>Event Card {id}</h1>
//                     <h3>{heading}</h3>
//                     <p>{description}</p>
//                     <p>
//                         <span>Date: {year} and Month: {month}</span>
//                     </p>
//                     <p>{location}</p>
//                 </div>
//             </div>
//             <div className="card-img-wrapper">
//                 <img src={img} alt="event image"></img>
//             </div>
//         </>
//     )
// }

// export default EventCard;


import { Link } from "react-router-dom";
import "./EventCard.css";
const EventCard = ({ id, heading, date, location, img,description }) => {
  const { year, month } = date;
  return (
     <Link to ={`/events/${id}`}>
      <div className="card">
        <div className="card-content">
          <h3>{heading}</h3>
          {/* <p>{description}</p> */}
          <p>
            <span>{description}</span>
            <span>Month: {month} Year: {year} </span>
            {/* <span>Month: {month}</span> */}
          </p>
          <p>Location: {location}</p>
        </div>

        <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;