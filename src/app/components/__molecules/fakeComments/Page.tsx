import React from 'react'
import ReportIcon from '@/app/images/icons/reportIcon/Page'
import Image from "next/image";
import jaimeandjon from "@/app/images/img/jaimeandjon.jpg";
import jaimeprofile from "@/app/images/img/jaimelannister.jpg"
import CommentIcon from '@/app/images/icons/commentIcon/Page';
import RepostIcon from '@/app/images/icons/repostIcon/Page';
import SendIcon from '@/app/images/icons/sendIcon/Page';
import FavouritesIcon from '@/app/images/icons/favouritesIcon/Page';

function FakeComments() {
  return (
   <>
   <div className="fake-comments_bigger">
   <div className="fake_comments flex flex-col ml-20 mr-10 mt-5">
    <div className="user_time_report_div flex items-center justify-between">
        <div className="user_time_div flex items-center gap-1 ml-[-70px]">
        <div className="profile_img_div rounded-[50%]">
    <Image src={jaimeprofile} alt='jaime lannister' width={60} height={60} className='rounded-[50%]'/>
   </div>
        <p>Jaime Lannister</p>
        <p>2d</p>
        </div>
        <ReportIcon />
    </div>
    <div className="title_content_div">
        <p>Pure Domination!</p>
        <Image src={jaimeandjon} alt="Jaime Lannister" width={400} height={200} />
        </div>
        <div className="icons_div flex items-center gap-4">
            <div className="love_div flex items-center">
                <FavouritesIcon />
                <p>10</p>
            </div>
            <div className="comment_div flex items-center">
            <CommentIcon />
            <p>2</p>
            </div>
            <div className="repost_div flex items-center">
                <RepostIcon />
                <p>3</p>
            </div>
            <div className="send_div flex items-center">
                <SendIcon />
                <p>4</p>
            </div>
        </div>
   </div>
   
   <div className="line border-b border-black h-[1px] w-full mt-5"></div>
   </div>
   
   </>
  )
}

export default FakeComments
