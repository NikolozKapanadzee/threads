import React from 'react'
import FakePosts from '../../__molecules/fakePosts/Page';
import jaimeprofile from "@/app/images/img/jaimelannister.jpg"
import jaimeandjon from "@/app/images/img/jaimeandjon.jpg";
import gujaprofile from "@/app/images/img/gujaprofile.jpg";
import gujaragbi from "@/app/images/img/gujaragbi.jpg";
import nikiprofile from "@/app/images/img/nikiprofile.jpeg";
import nikicontent from "@/app/images/img/nikicontent.png"
import iliaprofile from "@/app/images/img/iliaprofile.jpg";
import iliacontent from "@/app/images/img/iliacontent.jpg"
import vaxoprofile from "@/app/images/img/vaxoprofile.jpeg";
import vaxocontent from "@/app/images/img/vaxocontent.png"
import cerceiprofile from "@/app/images/img/cerceiprofile.webp";
import cerceicontent from "@/app/images/img/cerceicontent.jpg"
import nikoprofile from "@/app/images/img/nikoprofile.jpg";
import nikoicontent from "@/app/images/img/nikocontent.jpg"
import lukaprofile from "@/app/images/img/lukaprofile.jpg";
import lukaicontent from "@/app/images/img/lukacontent.png"
function Container() {
  return (
   <>
   <div className="main_div flex flex-col items-center gap-3  mt-4 ">
    <div className="content_container h-auto min-h-screen w-[640px] bg-[#101010] rounded-[28px] overflow-auto ">
      <FakePosts 
      user="Jaime Lannister" time="1d" title="Pure Domination!" favouriteQuantity={2} commentsQuantity={3}
      repostQuantity={4} sendQuantity={10} profileImg={jaimeprofile} contentImg={jaimeandjon}/>
      <FakePosts 
      user="Elguja Kupreishvili" time="1d" title="რაგბი ჩვენი თამაშია!" favouriteQuantity={10} commentsQuantity={1}
      repostQuantity={9} sendQuantity={7} profileImg={gujaprofile} contentImg={gujaragbi}/>
      <FakePosts 
      user="Niki Sukiasyan" time="2d" title="პიქსელ პერფექტ მინდა შემდეგი დავალება!!!" favouriteQuantity={1} commentsQuantity={5}
      repostQuantity={14} sendQuantity={3} profileImg={nikiprofile} contentImg={nikicontent}/>
      <FakePosts 
      user="Ilia Topuria" time="2d" title="Not Like Us" favouriteQuantity={321349} commentsQuantity={1}
      repostQuantity={32314} sendQuantity={13029} profileImg={iliaprofile} contentImg={iliacontent}/>
      <FakePosts 
      user="Vaxo Janiashvili" time="3d" title="თუ დაგჭირდათ დახმარება მომწერეთ მეგობრებო" favouriteQuantity={11} commentsQuantity={1}
      repostQuantity={4} sendQuantity={1} profileImg={vaxoprofile} contentImg={vaxocontent}/>
      <FakePosts 
      user="Cercei Lannister" time="3d" title="Power is power" favouriteQuantity={231} commentsQuantity={2}
      repostQuantity={5} sendQuantity={19} profileImg={cerceiprofile} contentImg={cerceicontent}/>
      <FakePosts 
      user="Nikoloz Kapanadze" time="4d" title="Let Down Underrated!" favouriteQuantity={1000000} commentsQuantity={1}
      repostQuantity={30} sendQuantity={892} profileImg={nikoprofile} contentImg={nikoicontent}/>
      <FakePosts 
      user="Luka Sulakvelidze" time="5d" title="ნიკო არ არის ეგ კაი პრაქტიკა დინამიური უნდა იყოს ყველაფერი" favouriteQuantity={1} commentsQuantity={1}
      repostQuantity={1} sendQuantity={1} profileImg={lukaprofile} contentImg={lukaicontent}/>
    </div>
   </div>
   </>
  )
}

export default Container;
