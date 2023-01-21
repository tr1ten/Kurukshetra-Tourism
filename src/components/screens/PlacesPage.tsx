import { useEffect, useState } from 'react';
import PlaceCard from './place_card';
import { Place } from './PlacePage';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useFirestore } from '~/lib/firebase';

function PlacesPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const db = useFirestore();
  useEffect(()=>{
    const placesRef = collection(db, 'places');
    const q = query(placesRef);
    onSnapshot(q, (snapshot) => {
        setPlaces(
          snapshot.docs.map((e)=>e.data() as Place)
        )
    });
  },[])
  return (
    <div className='mx-10'>
      <h1 className='font-bold text-center m-2 text-2xl'>Amazing Places to Visit</h1>
      {
        places.length===0 ? <p>No Places found!</p> :
        <div className="flex gap-4 mx-auto my-5 flex-wrap">{places.map((e) => <PlaceCard place={e}/>)}</div>
      }
    </div>
  );
}

export default PlacesPage;
