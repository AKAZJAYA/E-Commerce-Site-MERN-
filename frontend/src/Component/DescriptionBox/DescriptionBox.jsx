import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      
      <div className="descriptionbox_navigator">

        <div className="descriptionbox_nav_box">
            Description
        </div>
        <div className="descriptionbox_nav_box fade">
        Reviews (122)
        </div>
      </div>
      <div className="descriptionbox_description">

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, distinctio dicta laboriosam voluptatem tempora, doloribus sequi temporibus consectetur nobis officiis facere exercitationem dolore nesciunt earum mollitia praesentium quas, sunt ut?</p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, assumenda omnis tempora dolor rem explicabo alias ratione voluptatum reprehenderit expedita voluptate culpa perspiciatis corporis quidem quia nobis voluptatem saepe eligendi.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
