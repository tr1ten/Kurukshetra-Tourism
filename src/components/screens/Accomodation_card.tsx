import Rating from './Rating';
function accomodation_card(props: any) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={props.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title text-center">{props.title}</h2>

        <div>
          <Rating rating={props.rating} />
        </div>
        <div className="flex">
          <div className="badge badge-primary ">Cost</div>
          <p className=" ml-4 mb-8"> Rs {props.cost}/ Night</p>
        </div>

        <div className="card-actions text-end">
          <a href={props.book}>
            <button className="btn btn-primary">Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default accomodation_card;
