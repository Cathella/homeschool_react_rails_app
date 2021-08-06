import React from 'react'
import styled from 'styled-components'
import MathsIcon from 'images/math_icon.svg'
import EnglishIcon from 'images/english_icon.svg'
import ScienceIcon from 'images/science_icon.svg'
import SocialIcon from 'images/social_icon.svg'

const SubjectSection = styled.div`
  display: grid;
  align-items: center;
  text-align: center;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 35px;
  }
`
const Card = styled.div`
  color: white;
  padding: 30px 0;

  img {
    height: 40px;
  }
`
const SubjectName = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  padding: 12px 0;
`
const MathCard = styled.div`
  background-color: #00C0ED;
  border-radius: 20px;
  margin-bottom: 20px;
`
const ScienceCard = styled.div`
  background: linear-gradient(180deg, #FED0D4 0%, #ECC3C6 100%);
  border-radius: 20px;
  margin-bottom: 20px;
`
const SocialCard = styled.div`
  background: linear-gradient(180deg, #FDDA5F 0%, #DBBD55 100%);
  border-radius: 20px;
  margin-bottom: 20px;
`
const EnglishCard = styled.div`
  background: #917AEB;
  border-radius: 20px;
  margin-bottom: 20px;
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
          <SubjectName>Mathematics</SubjectName>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </MathCard>
      <ScienceCard>
        <Card>
          <img src={ScienceIcon} />
          <SubjectName>Science</SubjectName>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </ScienceCard>
      <SocialCard>
        <Card>
          <img src={SocialIcon} />
          <SubjectName>Social studies</SubjectName>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </SocialCard>
      <EnglishCard>
        <Card>
          <img src={EnglishIcon} />
          <SubjectName>English</SubjectName>
          <LessonCount>100+ Lessons</LessonCount>
        </Card>
      </EnglishCard>
    </SubjectSection>
  )
}

export default Subjects