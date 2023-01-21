import { Event } from './ShowEvents';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { FaCalendar } from 'react-icons/fa';

function EventCor({ events }: { events: Event[] }) {
  return (
    <div className="w-full p-4 m-4 flex items-center flex-col">
      {events.length === 0 ? null : (
        <>
          <h1 className="text-center font-bold text-xl">{events[0].type} EVENTS</h1>
          <Carousel
            className="w-full md:w-1/2"
            infiniteLoop
            showArrows={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay
            interval={3000}
          >
            {events.map((e,i) => (
              <div key={i}>
                <img className="" alt="" src={e.img} />
                <div className="legend opacity-100 bg-primary">
                  <h3 className="font-bold">{e.title}</h3>
                  <p>{e.description}</p>
                  <div className="flex">
                    <span className="flex items-center gap-2">
                      <FaCalendar className="inline" /> {e.time ?? '10:00 AM'}
                    </span>
                    <p className="text-gray-500 ">
                      <span className="mx-2 font-semibold"> &#8377; {e.price ?? 100}</span>
                    </p>
                  </div>

                  <Link className="text-sm text-blue-500" to={`/events/${e.id}`}>
                    {' '}
                    See More
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
}

export default EventCor;
