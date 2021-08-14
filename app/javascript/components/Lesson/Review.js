import React from 'react'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px 20px;
  margin: 0 0 15px 0;
`
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Description = styled.div`
  font-size: 14px;
`

const Review = (props) => {
  const { score, description } = props.attributes

  return(
    <Card>
      <RatingContainer>
        <Rating score={score} />
      </RatingContainer>
      <Description>{description}</Description>
    </Card>
  )
}

export default Review