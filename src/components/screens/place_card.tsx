import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from "react-router-dom";
import { Place } from "./PlacePage";

function placeCard({place}:{place:Place}) {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl w-7/12 lg:w-1/4">
      <figure>
        <img src={place.img} alt="Shoes" />
      </figure>
      <div className="card-body">
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
        
        <div className="card-actions justify-end">
          <a href={place.map}>
            <Link to={`/places/${place.id}`} className="btn bg-blue-400 border-none">Details</Link>
          </a>
        </div>
      </div>
    </div>
  );
}
export default placeCard;
