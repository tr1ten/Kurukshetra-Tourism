import { Head } from "../shared/Head";

function HeritagePage() {
  return (
    <div>
      <Head title='Heritage' />
      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">Brahma Sarovar</h2>
          <div>
            A beautiful water tank in Kurukshetra, Brahma Sarovar, is dedicated to Lord Shiva. It is believed that Lord
            Brahma created the universe from this land. Just in the close vicinity of this sacred place are the Birla
            Gita Mandir and Baba Nath's 'haveli'. The Sarovar comes to life in winters when birds migrate from faraway
            places to take a dip in these waters. This beautiful xtank bears a shining look during the 'Deep Daan' and
            'Aarti' on the occasion of Gita Jayanti in the late November and early December.
          </div>
        </div>
        <figure
          style={{
            justifyContent: 'flex-end',
          }}
          className="items-end justify-end"
        >
          <img
            className="w-56 md:w-full"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/7f/df/6e/brahma-sarovar.jpg?w=1200&h=-1&s=1"
            alt="Album"
          />
        </figure>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <figure
          style={{
            justifyContent: 'flex-end',
          }}
          className="items-end justify-end"
        >
          <img
            className=" md:w-full"
            src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2018/05/2018050164.jpg "
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">SHRI KRISHNA MUSEUM</h2>
          <div>
            The museum, unravels the mystique of the cult of Lord Krishna. It endeavours to present the multifaceted
            personality of The museum has six galleries, three each in two blocks. On display are stone personality of
            The museum has six galleries, three each in two blocks. On display are stone sculptures, bronze castings,
            leaf etchings, miniature paintings, clay pottery and terracotta artifacts. An extension of this museum is
            the Multimedia Mahabharata and Gita Gallery set up by Haryana Tourism in collaboration with Ministry of
            Tourism, Government of India.
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">STHANESHWARA MAHADEV TEMPLE</h2>
          <div>
            Sthaneshwara Mahadev Temple is situated at Thanesar. There lies a story behind this temple that Pandavas
            prayed to Lord Shiva to receive his blessings for the victory in the battle of Mahabharata. So, the water of
            the tank adjoining the temple is believed to be holy. It is believed that Kurukshetra pilgrimage visit is
            incomplete without visiting this temple. The temple of Sthaneshwara was an important part of the kingdom of
            King Harsh Vardhana of Pushyabhuti dynasty.
          </div>
        </div>
        <figure
          style={{
            justifyContent: 'flex-end',
          }}
          className="items-end justify-end"
        >
          <img
            className="w-56 md:w-full"
            src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2022/01/2022011270-1024x768.jpg"
            alt="Album"
          />
        </figure>
      </div>
    </div>
  );
}

export default HeritagePage;
