import { Link } from 'react-router-dom';
import { useAuthState, useSignIn } from '../contexts/UserContext';
import { SignInButton } from '../domain/auth/SignInButton';
import { SignOutButton } from '../domain/auth/SignOutButton';
import Logo from './logo.png';
import Temperature from './Temperature';
type Props = {
  toggleDark: () => void;
};

function NavBar(props: Props) {
  const {state} = useAuthState();
  return (
    <>
      <div className="flex flex-row w-full gap-3  bg-blue-400 p-2 text-white justify-end mr-3 text-sm">
        <a target="_blank" href='mailto:shubhi.blog@gmail.com' >Contact Us</a>
        {/* Line  */}
        <span className='border-r-2 border-white'></span>
        {state.state === 'UNKNOWN' ? "User" : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
        <span className='border-r-2 border-white'></span>

        <span className='flex gap-1 items-center'>
          <span >Dark</span>
          <input 
            onChange={props.toggleDark}
          type="checkbox" className="toggle toggle-xs toggle-primary"  />
        </span>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start p-2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link className="btn btn-ghost" to={'/'}>
                Home
              </Link>
              <Link className="btn btn-ghost" to={'/places'}>
                Places to visit
              </Link>
              <Link className="btn btn-ghost" to={'/accommodations'}>
                Accommodation
              </Link>
              <Link className="btn btn-ghost" to={'/heritage'}>
                Heritage
              </Link>
            </ul>
          </div>
          <a className=" normal-case text-xl">
            <img src={Logo} alt="logo" className="h-16" />
          </a>
        </div>  
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link className="btn btn-ghost" to={'/'}>
              Home
            </Link>
            <Link className="btn btn-ghost" to={'/places'}>
              Places to visit
            </Link>
            <Link className="btn btn-ghost" to={'/accommodations'}>
              Accommodation
            </Link>
            <Link className="btn btn-ghost" to={'/heritage'}>
              Heritage
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Temperature />
          <a href='/#explore' className="btn bg-blue-500 border-none">Explore</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
