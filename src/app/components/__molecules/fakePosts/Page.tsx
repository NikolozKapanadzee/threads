import React from 'react'
import ReportIcon from '@/app/images/icons/reportIcon/Page'
import Image from "next/image";
import CommentIcon from '@/app/images/icons/commentIcon/Page';
import RepostIcon from '@/app/images/icons/repostIcon/Page';
import SendIcon from '@/app/images/icons/sendIcon/Page';
import FavouritesIcon from '@/app/images/icons/favouritesIcon/Page';
import { StaticImageData } from "next/image";




type ParamsType = {
    user: string;
    time: string;
    title: string;
    profileImg: string | StaticImageData;
    contentImg: string | StaticImageData;
    favouriteQuantity: number;
    commentsQuantity: number;
    repostQuantity: number;
    sendQuantity: number;
}

function FakePosts({profileImg, user, time, title, contentImg,favouriteQuantity,commentsQuantity,repostQuantity,sendQuantity}: ParamsType) {
  return (
   <>
   <div className="fake-posts_bigger shadow-xl">
   <div className="fake_posts flex flex-col ml-20 mr-10 mt-5">
    <div className="user_time_report_div flex items-center justify-between">
        <div className="user_time_div flex items-center gap-3 ml-[-65px]">
        <div className="profile_img_div rounded-[50%]">
    <Image src={profileImg} alt='jaime lannister' width={60} height={60} className='rounded-[50%] w-[50px] h-[50px]'/>
   </div>
        <p className='user_name text-[#fff]'>{user}</p>
        <p className='post_time text-[#777777]'>{time}</p>
        </div>
        <ReportIcon />
    </div>
    <div className="title_content_div">
        <p className='title text-[#f3f5f7]'>{title}</p>
        <Image src={contentImg} alt="Jaime Lannister" width={400} height={200} />
        </div>
        <div className="icons_div flex items-center gap-4 mt-3">
            <div className="love_div flex items-center">
                <FavouritesIcon />
                <p className='text-[#CCCCCC]'>{favouriteQuantity}</p>
            </div>
            <div className="comment_div flex items-center">
            <CommentIcon />
            <p  className='text-[#CCCCCC]'>{commentsQuantity}</p>
            </div>
            <div className="repost_div flex items-center">
                <RepostIcon />
                <p  className='text-[#CCCCCC]'>{repostQuantity}</p>
            </div>
            <div className="send_div flex items-center">
                <SendIcon />
                <p  className='text-[#CCCCCC]'>{sendQuantity}</p>
            </div>
        </div>
   </div>
   <div className="line border-b border-black w-full mt-5"></div>
   </div>
   </>
  )
}

export default FakePosts
