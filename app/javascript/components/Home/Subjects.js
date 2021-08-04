import React from 'react'
import styled from 'styled-components'
import MathsIcon from 'images/math_icon.svg'
import EnglishIcon from 'images/english_icon.svg'
import ScienceIcon from 'images/science_icon.svg'
import SocialIcon from 'images/social_icon.svg'

const SubjectSection = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-columns: repeat(auto-fit, minmax(248px, 1fr));
  column-gap: 35px;
  text-align: center;
  width: 1100px;
  margin: 0 auto;
  position: relative;
`
const Card = styled.div`
  color: white;
  padding: 30px 0;

  img {
    width: 40px;
  }

  p {
    text-transform: uppercase;
    font-weight: bold;
  }
`
const MathCard = styled.div`
  background-color: #00C0ED;
  border-radius: 20px;
`
const ScienceCard = styled.div`
  background: linear-gradient(180deg, #FED0D4 0%, #ECC3C6 100%);
  border-radius: 20px;
`
const SocialCard = styled.div`
  background: linear-gradient(180deg, #FDDA5F 0%, #DBBD55 100%);
  border-radius: 20px;
`
const EnglishCard = styled.div`
  background: #917AEB;
  border-radius: 20px;
`
const LessonCount = styled.div`
  font-size: 13px;
  font-weight: bold;
`

const Subjects = () => {
  return(
    <SubjectSection>
      <MathCard>
        <Card>
          <img src={MathsIcon} />
          <p>Mathematics</p>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </MathCard>
      <ScienceCard>
        <Card>
          <img src={ScienceIcon} />
          <p>Science</p>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </ScienceCard>
      <SocialCard>
        <Card>
          <img src={SocialIcon} />
          <p>Social studies</p>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </SocialCard>
      <EnglishCard>
        <Card>
          <img src={EnglishIcon} />
          <p>English</p>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </EnglishCard>
    </SubjectSection>
  )
}

export default Subjects