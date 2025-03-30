import React from 'react'
import ThreadIcon from '@/app/images/icons/threadIcon/Page';
import HomeIcon from '@/app/images/icons/homeIcon/Page';
import SearchIcon from '@/app/images/icons/searchIcon/Page';
import CreateIcon from '@/app/images/icons/createIcon/Page';
import FavouritesIcon from '@/app/images/icons/favouritesIcon/Page';
import FriendsIcon from '@/app/images/icons/friendsIcon/Page';
import PinIcon from '@/app/images/icons/pinIcon/Page';
import SettingIcon from '@/app/images/icons/settingsIcon/Page';

function NavBar() {
  return (
    <nav className=" flex flex-col justify-between items-center bg-[rgba(10, 10, 10, 0.85)] min-h-screen w-[76px] h-full fixed backdrop-blur-lg " >
        <div className='upper_div mt-[20px] '>
            <ThreadIcon />
        </div>
        <div className="middle_div flex flex-col items-center gap-10 ">
           <HomeIcon />
           <SearchIcon />
           <CreateIcon />
           <FavouritesIcon />
           <FriendsIcon />
        </div>
        <div className='lower_div flex flex-col items-center gap-4 mb-[20px] '>
        <PinIcon />
        <SettingIcon />
        </div>
    </nav>
  )
}

export default NavBar;
