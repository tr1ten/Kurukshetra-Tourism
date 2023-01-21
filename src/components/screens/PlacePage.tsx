import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestore } from '~/lib/firebase';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import ReviewSystem from './ReviewSystem';
import Rating from './Rating';
import { Head } from '../shared/Head';
export interface Place {
  id: string;
  title: string;
  description: string;
  img: string;
  cost: number;
  rating: number;
  location: string;
  visitors: number;
  map: string;
}
function PlacePage() {
  const { placeId } = useParams();
  const [place, setPlace] = useState<Place | null>(null);
  const db = useFirestore();
  useEffect(() => {
    const placesRef = collection(db, 'places');
    const q = query(placesRef, where('id', '==', placeId));
    onSnapshot(q, (snapshot) => {
      setPlace(snapshot.docs[0].data() as Place);
    });
  }, []);
  return (
    <div className="w-10/12 md:w-8/12  m-auto">
      <Head title={place?.title ?? "Place"} />
      {!place ? (
        <div>Loading...</div>
      ) : (
        <div className=" w-10/12 lg:w-10/12 ">
          <div className="card lg:card-side rounded-none border-gray-200 border">
            <figure>
              <img className="w-2/3" src={place.img} alt="Album" />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">{place.title}</h2>
              <ul className=" text-gray-500 flex t gap-4 items-center pt-1">
                <li>
                  <FaMapMarkerAlt className="inline" /> {place.location ?? 'Kurukshetra'}
                </li>
                <li>
                  <MdAirlineSeatReclineNormal className="inline" /> {place.visitors ?? 100} Visitors
                </li>
              </ul>
              <p className="text-gray-500 ">
                <span className="text-lg font-semibold"> &#8377; {place.cost ?? 100}</span>
              </p>
              <div>
                <Rating rating={place.rating ?? 3} />
              </div>
              <button className="btn">Open in map</button>
            </div>
          </div>
          <div className="m-5">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="text-gray-500">{place.description}</p>
          </div>
          <ReviewSystem idKey="placeId" oid={place.id} />
        </div>
      )}
    </div>
  );
}

export default PlacePage;
