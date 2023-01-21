import Rating from './Rating';
import { Accomodation } from './Accomodations';
function accomodation_card({ accommodation }: { accommodation: Accomodation}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={accommodation.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title text-center">{accommodation.title}</h2>

        <div>
          <Rating rating={accommodation.rating} />
        </div>
        <div className="flex">
          <div className="badge ">Price</div>
          <p className=" ml-4 mb-8"> &#8377; {accommodation.cost ?? 100}/Person</p>
        </div>

        <div className="card-actions text-end">
          <a target="_blank" href={accommodation.url}>
            <button className="btn border-none bg-blue-400">Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default accomodation_card;
