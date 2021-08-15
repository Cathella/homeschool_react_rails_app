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
  border: 1.4px dashed rgba(0,0,0,0.2);
  // box-shadow: -5px 5px 0px rgba(0,0,0,0.1);
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
  width: 80%;
  margin: 0 auto;

  textarea {
    font-size: 14px;
    width: 91%;
    min-height: 55px;
    border-radius: 10px;
    border: 1.4px dashed rgba(0,0,0,0.2);
    margin: 10px auto 0;
    padding: 12px;
  }
`
const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`
const SubmitBtn = styled.button`
  background: linear-gradient(180deg, #FDDA5F 0%, #DBBD55 100%);
  border: 1px solid white;
  border-radius: 10px;
  padding: 16px 0;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  width: 80%;
  margin-top: 0px;
  font-weight: bold;

  &:hover {
    background: #00C0ED;
  }
`
const Headline = styled.div`
  padding: 10px 20px 20px 20px;
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