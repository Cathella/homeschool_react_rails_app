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
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 20px;
`
const Field = styled.div`
  width: 100%;

  textarea {
    width: 93%;
    min-height: 60px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px auto;
    padding: 12px;
  }
`
const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`
const SubmitBtn = styled.button`
  color: #ffffff;
  background: linear-gradient(94.53deg, #917AEB 8.02%, #00C0ED 142.37%);
  border-radius: 10px;
  padding: 16px 0;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: none;
  width: 100%;
  margin-top: 15px;
  font-weight: bold;

  // box-sizing: border-box;

  &:hover {
    background: #00C0ED;
    color: #ffffff;
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
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return(
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>
          Share with us, how much you enjoyed the lesson!
        </Headline>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Lesson</RatingTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <Field>
          <textarea onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Leave a comment (Optional)" />
        </Field>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default ReviewForm