import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import { useAuth, useFirestore, useStorage } from '~/lib/firebase';
import { collection,addDoc,Timestamp } from 'firebase/firestore';
function Index() {
  const { state } = useAuthState();
  const [messege, setMessege] = useState('');
  const auth = useAuth()
  const db = useFirestore()
  const onSend = async () => {
    try {
      await addDoc(collection(db, 'tasks'), {
        messege
      });
      setMessege("")
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <Head title="Home" description='Welcome'/>/
      <div className="hero min-h-screen">
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Messege
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="messege"
              value={messege}
              onChange={(e) => setMessege(e.target.value)}
            />
          </div>
        <button className='btn' onClick={onSend}>
          Send
        </button>
        </div>
      </div>
    </>
  );
}

export default Index;
