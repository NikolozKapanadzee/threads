import React from "react";
import FakePosts from "../../__molecules/fakePostItem/FakePostItem";
import PostsData from "@/app/constants/postsData";
import Login from "../../__atoms/Login";
function Container() {
  return (
    <div className="main_div flex flex-row-reverse  gap-3 mt-4">
      <Login />
      <div className="content_container h-auto   w-[640px] bg-[#1a1919] rounded-[28px] overflow-auto">
        {PostsData.map((post, index) => (
          <FakePosts
            key={index}
            user={post.user}
            time={post.time}
            title={post.title}
            favouriteQuantity={post.favouriteQuantity}
            commentsQuantity={post.commentsQuantity}
            repostQuantity={post.repostQuantity}
            sendQuantity={post.sendQuantity}
            profileImg={post.profileImg}
            contentImg={post.contentImg}
          />
        ))}
      </div>
    </div>
  );
}

export default Container;
