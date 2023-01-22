import Rating from './Rating';
import AccommodationCard  from './Accomodation_card';
import { useFirestore } from '~/lib/firebase';
import { useEffect } from 'react';
import { collection, query, onSnapshot } from '@firebase/firestore';
import React from 'react';
import { Head } from '../shared/Head';
export interface Accomodation {
  img:string;
  title: string,
  url: string,
  cost: number,
  rating: number,
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
    <div>
      <Head title='Accomodations' />
      <h1 className='font-bold text-center m-2 text-2xl'>Accommodations</h1>
    <div className="flex flex-wrap items-center justify-center mx-10 m-5 gap-4">
      {
        Accomodations.length===0 ? <p>No Accomodations found!</p> :
        Accomodations.map((e,i) => (
          <AccommodationCard  key={`${i}`} accommodation={e}/>
        ))
      }
    </div>
    </div>
  );
}

export default AccomodationsPage;
