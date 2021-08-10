import React from 'react'

const ReviewForm = (props) => {
  return(
    <div className="wrapper">
      <form>
        <div>
          Have an experience with [Lesson Title]? 
          Share your review!
        </div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Review TDescription" />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">
              [Star Rating Goes Here]
            </div>
          </div>
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm