import { collection, query, where, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { useParams } from "react-router";
import { useFirestore } from "~/lib/firebase";
import Rating from "./Rating";
import ReviewSystem from "./ReviewSystem";
import { Event } from "./ShowEvents";
function EventPage() {
    const [event, setEvent] = useState<Event | null>(null);
    const { eventId } = useParams<{ eventId: string }>();
    const [aggRating, setAggRating] = useState<number>();
    const db = useFirestore();
    useEffect(() => {
        const eventsRef = collection(db, 'events');
        const q = query(eventsRef, where('id', '==', eventId));
        onSnapshot(q, (snapshot) => {
            setEvent(snapshot.docs[0].data() as Event);
        });
        const reviewsRef = collection(db, 'reviews');
        const q2 = query(reviewsRef, where('eventId', '==', eventId));
        onSnapshot(q2, (snapshot) => {
            const ratings = snapshot.docs.map(doc => doc.data().rating);
            const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
            setAggRating(avg);
        });
    },[]);

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
                            <li>
                              <FaCalendar className="inline" /> {event.time ?? '12/12/2021'}
                            </li>
                            
                          </ul>
                          <p className="text-gray-500 ">
                            <span className="text-lg font-semibold"> &#8377; {event.price ?? 100}</span>
                          </p>

                          <div>
                            <Rating rating={aggRating ?? (event.rating ?? 1)} />
                          </div>
                          <a target="_blank" href={event.map ?? 'https://goo.gl/maps/GFLwTsv1nVg1WC3M6'} className="btn">Open in map</a>
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