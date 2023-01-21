import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore } from "~/lib/firebase";
import EventCor from "./EventCor";

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    rating: number;
    img: string;
    price: number;
    type: string;
    map: string;

}
// Show both 
function ShowEvents() {
    const [events,setEvents] = useState<Event[]>([]);
    const db = useFirestore();
    useEffect(() => {
        const eventsRef = collection(db, 'events');
        const q = query(eventsRef);
        onSnapshot(q, (snapshot) => {
            setEvents(snapshot.docs.map(doc => doc.data() as Event));
        });
        
    },[]);
    
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2">
                <EventCor events={events.filter((e)=>e.type==='UPCOMING')}/>
                <EventCor events={events.filter((e)=>e.type==='ONGOING')}/>
            </div>
        </div>

    );
}

export default ShowEvents;