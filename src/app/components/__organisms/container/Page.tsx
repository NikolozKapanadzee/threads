import React from 'react'
import FakeComments from '../../__molecules/fakeComments/Page';


function Container() {
  return (
   <>
   <div className="main_div flex flex-col items-center gap-3  mt-4">
    <div className="content_container h-auto min-h-screen w-[640px] bg-[gray] rounded-[28px] overflow-auto ">
      <FakeComments />
    </div>
   </div>
   </>
  )
}

export default Container;
