import React from 'react'
import { SiPuma } from "react-icons/si";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegCircleXmark, FaRegUser } from "react-icons/fa6";
import { useState, useEffect, useContext } from 'react';
import NewDropDown from './NewDropDown';
import { motion } from 'framer-motion';
import WomenDropdown from './WomenDropdown';
import MenDropdown from './MenDropdown';
import KidsDropdown from './KidsDropdown';
import MotorDropdown from './MotorDropdown';
import CollabDropdown from './CollabDropdown';
import SportsDropdown from './SportsDropdown';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../SearchContext';

const Header = ({ loadingBarRef }) => {
  const offers = ["EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS", "⚡1-DAY EXPRESS DELIEVERY NOW AVAILABLE IN PATNA", "FREE RETURNS AND FREE EXCHANGE", "SOLVE YOUR QUERIES FASTER THAN EVER. SEND US A HI! ON WHATSAPP 6392839328"];

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [newhover, setNewhover] = useState(false);
  const [menhover, SetMenhover] = useState(false);
  const [kidshover, setKidshover] = useState(false);
  const [motorhover, setMotorhover] = useState(false);
  const [collabhover, setCollabhover] = useState(false);
  const [sporthover, setSporthover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchDrop, setIsSearchDrop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [offers.length]);

  const navigate = useNavigate();

  const openNew = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/New');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openHome = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openMen = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Men');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openWomen = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Women');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openKids = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Kids');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openMotor = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/MotorSports');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const toggleCart = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Cart');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openCollab = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Collaborations');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openSports = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Sports');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openContacts = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Contacts');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openAbout = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/AboutUs');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const toggleSearch = () => {
    setIsSearchDrop(!isSearchDrop)
  }
  const toggleMenuclose = () => {
    setIsSearchDrop(false);
    setTimeout(() => setIsOpen(false), 500);
  };

  const { setSearchQuery, setSearchResults, allProducts } = useContext(SearchContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(query);
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setIsSearchDrop(false);
    navigate("/search");
  };


  const toggleSignUp = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/AuthPage');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const toggleLike = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Liked');
      loadingBarRef.current.complete();
    }, 1000);
  };

  return (
    <div className='flex-col w-screen'>
      <div className='flex justify-center items-center bg-white text-black z-50 h-12 fixed top-0 left-0 w-full'>
        <p className='font-semibold text-small'>{offers[index]}</p>
      </div>
      <div className="flex flex-wrap h-32 w-full bg-gray-800 fixed top-0 text-white shadow-md z-40 p-4">
        <span className='mt-14' onClick={openHome} ><SiPuma size={32} /></span>
        <div className="hidden lg:flex gap-10 justify-center items-center top-6 left-8 relative">
          <ul className=' relative flex gap-12'>
            <li onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)} className='group'>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openNew}>New</p>

              {hover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <NewDropDown />
                  </motion.div>
                </div>
              )}
            </li>
            <li className=' group' onMouseEnter={() => setNewhover(true)}
              onMouseLeave={() => setNewhover(false)}>
              <p onClick={openWomen} className='hover:underline cursor-pointer hover:decoration-yellow-500'>Women</p>

              {newhover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setNewhover(true)}
                  onMouseLeave={() => setNewhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <WomenDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => SetMenhover(true)}
              onMouseLeave={() => SetMenhover(false)} >
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openMen} >Men</p>
              {menhover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => SetMenhover(true)}
                  onMouseLeave={() => SetMenhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <MenDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => setKidshover(true)}
              onMouseLeave={() => setKidshover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openKids} >Kids</p>
              {kidshover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setKidshover(true)}
                  onMouseLeave={() => setKidshover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <KidsDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => setMotorhover(true)}
              onMouseLeave={() => setMotorhover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openMotor} >Motorsport</p>
              {motorhover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setMotorhover(true)}
                  onMouseLeave={() => setMotorhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <MotorDropdown />
                  </motion.div>
                </div>
              )}
            </li>
            <li className=' group' onMouseEnter={() => setCollabhover(true)}
              onMouseLeave={() => setCollabhover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openCollab}> Collaborations
              </p>
              {collabhover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setCollabhover(true)}
                  onMouseLeave={() => setCollabhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <CollabDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => setSporthover(true)}
              onMouseLeave={() => setSporthover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openSports}> Sports
              </p>
              {sporthover && (
                <div
                  className="absolute left-0 mt-auto w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setSporthover(true)}
                  onMouseLeave={() => setSporthover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <SportsDropdown />
                  </motion.div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className=' flex flex-wrap gap-10 fixed top-20 right-5  '>
          <ul className='flex gap-8 '>
            <button className='lg:hidden' onClick={toggleMenu}>
              <FaBars />
            </button>
            <li>
              <FaSearch onClick={toggleSearch} />
            </li>
            <li>
              <FaRegHeart onClick={toggleLike} />
            </li>
            <li>
              <BsCart3 onClick={toggleCart} />
            </li>
            <li>
              <FaRegUser onClick={toggleSignUp} />
            </li>
          </ul>
        </div>
        {isSearchDrop && (
          <div
            className={`absolute w-screen h-screen bg-white flex p-4 gap-4 justify-items-center top-8 left-0 origin-top transform transition-all duration-300 ease-in-out ${isSearchDrop ? "scale-y-100" : "scale-y-0"
              }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 h-12 p-2 border border-gray-300 rounded text-black"
              onChange={(e) => setQuery(e.target.value)}

            />
            <button
              onClick={handleSearch}
              className="w-14 h-12 bg-blue-500 text-white rounded-full flex justify-center items-center 
             transition-all duration-300 hover:bg-blue-600 active:bg-blue-700 active:scale-90"
            >
              <FaSearch />
            </button>

            <button onClick={toggleMenuclose} className="h-10 w-6">
              <FaRegCircleXmark color="black" />
            </button>
          </div>
        )}
        {isOpen && (
          <div className="lg:hidden flex flex-col bg-gray-800 text-white fixed top-32 w-full z-30 p-4 gap-4">
            <a onClick={openNew} className="hover:underline">
              New
            </a>
            <a onClick={openCollab} className="hover:underline">
              Collab
            </a>
            <a onClick={openMen} className="hover:underline">
              Men
            </a><a onClick={openWomen} className="hover:underline">
              Women
            </a><a onClick={openKids} className="hover:underline">
              Kids
            </a>
            <a onClick={openAbout} className="hover:underline">
              About
            </a>
            <a onClick={openContacts} className="hover:underline">
              Contact
            </a>
          </div>
        )}
      </div>
    </div >
  )
}

export default Header
