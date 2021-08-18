import React, { Fragment } from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 10px;
  font-size: 16px;
  padding: 32px 0 12px 0;
  border: 1.4px solid gray;
  background: #ffffff;
  margin: 12px 0;
`
const RatingBox = styled.div`
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
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 12px;
`
const Field = styled.div`
  width: 70%;
  margin: 0 auto;

  textarea {
    font-size: 14px;
    width: 91%;
    min-height: 55px;
    border-radius: 10px;
    border: 1.4px solid gray;
    margin: 10px auto 0;
    padding: 12px;

    :focus {
      outline: none;
    }
  }
`
const Wrapper = styled.div`
  text-align: center;
  margin: 20px 0 0 0;
  border: 1.4px dashed gray;
  border-radius: 20px;
  background: #d4ebea;
  padding-bottom: 60px;
`
const SubmitBtn = styled.button`
  background: #FA64A9;
  border: 0;
  height: 50px;
  border-radius: 25px;
  line-height: 50px;
  color: white;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  width: 70%;
  margin-top: 0px;
  font-weight: bold;
`
const Headline = styled.div`
  padding: 50px 50px 20px;
  font-size: 18px;
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
          <textarea onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Leave a comment (Optional)" />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Lesson</RatingTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default ReviewForm