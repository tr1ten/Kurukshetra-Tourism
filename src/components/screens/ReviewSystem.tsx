import { collection, query, where, onSnapshot, setDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth, useFirestore } from "~/lib/firebase";
import { useAuthState } from "../contexts/UserContext";

interface Review{
    placeId: string;
    userId: string;
    username: string;
    img: string;
    review: string;
    rating: number;
    date: Date;
}

function ReviewSystem({placeId}: {placeId: string}) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const db = useFirestore();
    const auth = useAuth();
    const {state} = useAuthState();
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        const reviewsRef = collection(db, 'reviews');
        const q = query(reviewsRef, where('placeId', '==', placeId));
        onSnapshot(q, (snapshot) => {
            setReviews(snapshot.docs.map(doc => doc.data() as Review));
        });
    },[]);
    const [review, setReview] = useState("");
    const onSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const reviewRef = collection(db, 'reviews');
        const reviewDoc = {
            placeId: placeId,
            userId: auth.currentUser?.uid,
            img: auth.currentUser?.photoURL,
            username: auth.currentUser?.displayName,
            review: review,
            rating: 5,
            date: new Date()
        };
        await setDoc(doc(reviewRef), reviewDoc);
        setLoading(false);
    }
    return (
        <div>
            <h1 className="font-bold text-xl m-2">
                Reviews
            </h1>
            <div>
            {reviews.length==0 ? <p>No reviews found!</p> : reviews.map(review => (
                <div className="border  p-2">
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full" src={review.img ?? "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-white-blue-png-image_3918443.jpg"} alt="User" />
                        <div>
                        <p className="font-semibold">{review.username ?? "Anon"}</p>
                        <p className="text-sm text-gray-400">{review.rating ?? 5}</p>
                            </div>
                    </div>
                    <p className="text-gray-500">{review.review}</p>
                         
                </div>
            ))}
            </div>
            {/* Form for writing review */}
            <hr className="my-4" />
            {state.state!='SIGNED_IN' ? <p>Please sign in to write a review</p> : (
                <form onSubmit={onSubmitReview} className="flex flex-col">
                    <textarea className="textarea textarea-bordered" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                    <button disabled={loading} type="submit" className="btn btn-outline btn-primary mt-2">Submit</button>
                </form>

            )}
            
        </div>
    );
}

export default ReviewSystem;