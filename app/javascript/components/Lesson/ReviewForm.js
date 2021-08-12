import React, { Fragment } from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #ffffff;
  margin: 12px 0;
`
const RatingBox = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input { 
    display:none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`
const RatingTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
  // text-align: center;
`
const Field = styled.div` 
  // border-radius: 4px;
  width: 100%;

  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px auto;
    padding: 0px 12px;
    width: 93%;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
    width: 100%;
  }
`
const Wrapper = styled.div`
  padding: 20px;
  height: 100vh;
  text-align: center;
`
const SubmitBtn = styled.button`
  color: #ffffff;
  background: #333333;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #333333;
  width: 100%;
  // margin-top: 30px;

  &:hover {
    background: #ffffff;
    color: #333333;
    border: 1px solid #ffffff;
  }
`
const Headline = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return(
      <Fragment>
        <input type="radio" value={score} checked={props.review.score == score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`} />
        <label onCLick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return(
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>
          How did you find this lesson? Share your review!
        </Headline>
        <Field>
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Title" />
        </Field>
        <Field>
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Leave a comment" />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Lesson</RatingTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default ReviewForm