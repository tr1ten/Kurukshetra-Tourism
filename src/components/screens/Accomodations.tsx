import Rating from './Rating';
import AccommodationCard  from './Accomodation_card';
import { useFirestore } from '~/lib/firebase';
import { useEffect } from 'react';
import { collection, query, onSnapshot } from '@firebase/firestore';
import React from 'react';
export interface Accomodation {
  img:string;
  title: string,
  url: string,
  cost: 900,
  rating: 4,
}

function AccomodationsPage() {
  const [Accomodations, setAccomodations] = React.useState<Accomodation[]>([]);
  const db = useFirestore();
  useEffect(() => {
    const eventsRef = collection(db, 'accommodations');
    const q = query(eventsRef);
    onSnapshot(q, (snapshot) => {
        setAccomodations(snapshot.docs.map(doc => doc.data() as Accomodation));
    });
    
  },[]);
  return (
    <>
      <h1 className='font-bold text-center m-2 text-2xl'>Accommodation</h1>
    <div className="flex flex-wrap mx-36 m-5 gap-2">
      {
        Accomodations.length===0 ? <p>No Accomodations found!</p> :
        Accomodations.map((e) => (
          <AccommodationCard  accommodation={e}/>
        ))
      }
    </div>
    </>
  );
}

export default AccomodationsPage;
