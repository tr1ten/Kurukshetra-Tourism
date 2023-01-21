import { useEffect, useState } from 'react';
import PlaceCard from './place_card';
import { Place } from './PlacePage';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useFirestore } from '~/lib/firebase';
const imageSizes = [
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
];
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
    <div className='m-2'>
      <h1 className='font-bold text-xl'>Places</h1>
      {
        places.length===0 ? <p>No Places found!</p> :
        <div className="flex mx-32 flex-wrap">{places.map((e) => <PlaceCard place={e}/>)}</div>
      }
    </div>
  );
}

export default PlacesPage;
