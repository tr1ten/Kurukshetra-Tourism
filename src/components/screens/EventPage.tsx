import { collection, query, where, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { useParams } from "react-router";
import { useFirestore } from "~/lib/firebase";
import Rating from "./Rating";
import ReviewSystem from "./ReviewSystem";
import { Event } from "./ShowEvents";
function EventPage() {
    const [event, setEvent] = useState<Event | null>(null);
    const { eventId } = useParams<{ eventId: string }>();
    const db = useFirestore();
    useEffect(() => {
        const eventsRef = collection(db, 'events');
        const q = query(eventsRef, where('id', '==', eventId));
        onSnapshot(q, (snapshot) => {
            setEvent(snapshot.docs[0].data() as Event);
        });
    });
    return (
        <div className="w-10/12 md:w-8/12  m-auto">
            {!event ? <p>No Such event Exist...</p> :
                (
                    <div className=" w-10/12 lg:w-10/12 ">
                      <div className="card lg:card-side rounded-none border-gray-200 border">
                        <figure>
                          <img className="w-2/3" src={event.img} alt="Album" />
                        </figure>
                        <div className="card-body w-full">
                          <h2 className="card-title">{event.title}</h2>
                          <ul className=" text-gray-500 flex t gap-4 items-center pt-1">
                            <li>
                              <FaMapMarkerAlt className="inline" /> {event.location ?? 'Kurukshetra'}
                            </li>
                            
                          </ul>
                          <p className="text-gray-500 ">
                            <span className="text-lg font-semibold"> &#8377; {event.price ?? 100}</span>
                          </p>
                          <div>
                            <Rating rating={event.rating ?? 3} />
                          </div>
                          <a href={event.map ?? "#"} className="btn">Open in map</a>
                        </div>
                      </div>
                      <div className="m-5">
                        <h2 className="text-2xl font-semibold">Description</h2>
                        <p className="text-gray-500">{event.description}</p>
                      </div>
                        <ReviewSystem idKey="eventId" oid={event.id} />
                    </div>
                  )
            }
        </div>
    );
}

export default EventPage;