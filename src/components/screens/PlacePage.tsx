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
  embed_url: string;
  location: string;
  visitors: number;
  map: string;
}
function PlacePage() {
  const { placeId } = useParams();
  const [place, setPlace] = useState<Place | null>(null);
  const db = useFirestore();
  const [aggRating, setAggRating] = useState(1);

  useEffect(() => {
    const placesRef = collection(db, 'places');
    const q = query(placesRef, where('id', '==', placeId));
    onSnapshot(q, (snapshot) => {
      setPlace(snapshot.docs[0].data() as Place);
    });
    const reviewsRef = collection(db, 'reviews');
    const q2 = query(reviewsRef, where('placeId', '==', placeId));
    onSnapshot(q2, (snapshot) => {
      const ratings = snapshot.docs.map((e) => e.data().rating);
      const sum = ratings.reduce((a, b) => a + b, 0);
      const avg = sum / ratings.length;
      console.log('avg place rating ', avg);
      setAggRating(avg);
    });
  }, []);
  return (
    <div className="w-10/12 md:w-8/12  m-auto">
      <Head title={place?.title ?? 'Place'} />
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
                <Rating rating={aggRating ?? place.rating ?? 1} />
              </div>
              <a target="_blank" href={place.map ?? 'https://goo.gl/maps/GFLwTsv1nVg1WC3M6'} className="btn">
                Open in map
              </a>
            </div>
          </div>
          <div className="m-5">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="text-gray-500">{place.description}</p>
          </div>
          <div className="m-5">
            <h3 className="text-2xl font-semibold">Location</h3>
            <iframe className='mx-auto my-2' src={place.embed_url ?? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6387.758807434709!2d76.8294566065148!3d29.980852127134508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e476733f3bdf3%3A0x8fef3b5110371b22!2sShri%20Devikoop%20Bhadrakali%20Shaktipeeth%20Temple%2C%20Kurukshetra!5e0!3m2!1sen!2sin!4v1674365924877!5m2!1sen!2sin'} width="600" height="450"  allowFullScreen={false} loading="lazy"></iframe>
          </div>
          <ReviewSystem idKey="placeId" oid={place.id} />
        </div>
      )}
    </div>
  );
}

export default PlacePage;
