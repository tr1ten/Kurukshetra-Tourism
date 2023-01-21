import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import { useAuth, useFirestore, useStorage } from '~/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import Video from '../../assets/video.mp4';
import ShowEvents from './ShowEvents';
// import Bharamsarovar1 from '../../assets/brahmaSarover.jpg';
// import Jyotisar from '../../assets/jyotisar.jpg';
// import Sheikh from '../../assets/sheikh.jpg';
function Index() {
  const { state } = useAuthState();
  const [messege, setMessege] = useState('');
  const auth = useAuth();
  const db = useFirestore();
  
  const onSend = async () => {
    try {
      await addDoc(collection(db, 'tasks'), {
        messege,
      });
      setMessege('');
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <Head title="Home" description="Welcome" />
      <div className="flex w-full ">
        <div className="carousel">
          <div id="slide1" className="carousel-item h-72 relative w-full">
            <img
              src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2018/05/2018052556.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-ghost text-white text-lg">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-ghost text-white text-lg">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item h-72 relative w-full">
            <img
              src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2022/01/2022012554-1024x576.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-ghost text-white text-lg">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-ghost text-white text-lg">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item h-72 relative w-full">
            <img
              src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2022/01/2022012554-1024x576.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-ghost text-white text-lg">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle btn-ghost text-white text-lg">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item h-72 relative w-full">
            <img
              src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2022/01/2022012554-1024x576.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-ghost text-white text-lg">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-ghost text-white text-lg">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="menu p-4 w-80 flex flex-col bg-blue-400 h-full text-white">
            {/* <!-- Sidebar content here --> */}
            <div>
            <li>
              <a>Pocket friendly tourism</a>
            </li>
            <li>
              <a>Kids Attraction</a>
            </li>
            <li>
              <a>Kurukshetra@360</a>
            </li>
            <li>
              <a>Picnic spots</a>
            </li>
            </div>
            {/* Social media icons */}
            <div className="">
              <a href="https://www.facebook.com/kurukshetra.tourism" className="btn btn-ghost btn-sm">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/kurukshetra_tourism/" className="btn btn-ghost btn-sm">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/kurukshetra_t" className="btn btn-ghost btn-sm">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* mmk */}
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <video className="w-full md:w-1/3 " controls>
          <source src={Video} type="video/mp4" />
        </video>


        <div className="card-body">
          <h2 className="card-title">Why one should visit Kurukshetra</h2>
          <p>
            Kurukshetra is a city in the Indian state of Haryana, known for its historical and religious significance.
            It is believed to be the site of the Battle of Kurukshetra, as described in the ancient Indian epic
            Mahabharata. The city is also home to several important temples, such as the Jyotisar Temple and the Brahma
            Sarovar, which are considered sacred by Hindus. Additionally, Kurukshetra is known for its rich cultural
            heritage and is a popular destination for those interested in history and religion.
          </p>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">Facts about Kurukshetra</h2>
          <div>
            <ul className="list-disc">
              <li>It is the land of the Bhagwad Gita</li>
              <li>
                It was established in 1963 as Regional Engineering College Kurukshetra and upgraded to NIT status in
                2002.
              </li>
              <li>
                It offers undergraduate, postgraduate and doctoral programs in various fields of Engineering, Applied
                Sciences, and Management
              </li>
              <li>The campus is spread over an area of around 300 acres.</li>
              <li>It has collaborations with many industries and foreign universities.</li>
            </ul>
          </div>
        </div>
        <div className='card-actions justify-center md:justify-end rounded '>
          <img className='w-56 md:w-1/2' src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2022/01/2022011270-1024x768.jpg" alt="Album" />
        </div>
      </div>
     <div className=''>
      <ShowEvents />
     </div>
    </>
  );
}

export default Index;
