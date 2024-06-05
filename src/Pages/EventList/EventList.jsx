import EventCard from "../../components/EventCard/EventCard"
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import "./EventList.css";

const EventList = () =>{
    const renderEventCards = () =>{
        return eventList.map(({id,heading,date,location,description,img})=>{
            return(
                <EventCard
                    key={id}
                    id={id}
                    date={date}
                    heading={heading}
                    location={location}
                    img={img}
                    description={description}
                />

            )
        })
    }

    return(
        // <div>
        //     <div className="event-list-wrapper">
        //         <div className="event-list">
        //             {eventList.length>0?(
        //                 renderEventCards()
        //             ):<p>No events available</p>}
        //         </div>
        //     </div>
        // </div>

        <div>
            <Navigation/>
            <div className="event-list-wrapper">
                <div className="event-list">
                    {eventList.length > 0 ? (
                    renderEventCards()
                    ) : (
                    <p>No events available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EventList;