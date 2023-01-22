import { collection, query, where, onSnapshot, setDoc, doc, orderBy, limit } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuth, useFirestore } from '~/lib/firebase';
import { useAuthState } from '../contexts/UserContext';
import StarRatingComponent from 'react-star-rating-component';

interface Review {
  placeId: string;
  eventId: string;
  userId: string;
  username: string;
  img: string;
  review: string;
  rating: number;
  date: Date;
}

function ReviewSystem({ oid, idKey }: { oid: string; idKey: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const db = useFirestore();
  const auth = useAuth();
  const { state } = useAuthState();
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, where(idKey, '==', oid), limit(4));
    onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((doc) => doc.data() as Review));
    });
  }, []);
  const [review, setReview] = useState('');
  const onSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review.length == 0) {
      alert('Please enter a review!');
      return;
    }
    setLoading(true);
    const reviewRef = collection(db, 'reviews');
    const reviewDoc = {
      [idKey]: oid,
      userId: auth.currentUser?.uid,
      img: auth.currentUser?.photoURL,
      username: auth.currentUser?.displayName,
      review: review,
      rating: rating,
      date: new Date(),
    };
    await setDoc(doc(reviewRef), reviewDoc);
    setReview('');
    setLoading(false);
  };
  return (
    <div>
      <h1 className="font-bold text-xl m-2">Reviews</h1>
      <div>
        {reviews.length == 0 ? (
          <p>No reviews found!</p>
        ) : (
          reviews.map((review, ind) => (
            <div className="border  p-2" key={`k-${ind}`}>
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={
                    review.img ??
                    'https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-white-blue-png-image_3918443.jpg'
                  }
                  alt="User"
                />
                <div>
                  <p className="font-semibold">{review.username ?? 'Anon'}</p>
                  <p className="text-sm text-gray-400">{review.rating ?? 5} ⭐</p>
                </div>
              </div>
              <p className="text-gray-500">{review.review}</p>
            </div>
          ))
        )}
      </div>
      {/* Form for writing review */}
      <hr className="my-4" />
      <h2 className="font-bold">Post a review</h2>
      {state.state != 'SIGNED_IN' ? (
        <p className="my-2">Please sign in to write a review</p>
      ) : (
        <form onSubmit={onSubmitReview} className="flex flex-col my-4">
         <div className='flex gap-4'>
            <p>Rate Overall Experience</p>
         <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={
            (nx,px)=> setRating(nx)
          }
        />
         </div>
          <textarea
            placeholder="Awesome place..."
            className="textarea textarea-bordered"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button disabled={loading} type="submit" className="btn btn-outline btn-primary mt-2">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ReviewSystem;
