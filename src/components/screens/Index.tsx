import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import { useAuth, useFirestore, useStorage } from '~/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
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
      <div className="flex">
        <div className="carousel w-full flex-1">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content bg-sky-200/100  ">
            {/* <!-- Sidebar content here --> */}
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
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>

        {/* mmk */}
      </div>

      <div className="card card-side bg-base-100 shadow-xl m-10">
        <figure>
          <img width="200px" src="https://placeimg.com/200/280/arch" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Why visit KKR</h2>
          <p>Click the button to watch on</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
