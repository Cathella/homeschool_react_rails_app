import React from 'react'
import { SubjectSection, Card, SubjectName, MathCard, ScienceCard, SocialCard, EnglishCard, LessonCount } from '../AppElements'
import MathsIcon from 'images/math_icon.svg'
import EnglishIcon from 'images/english_icon.svg'
import ScienceIcon from 'images/science_icon.svg'
import SocialIcon from 'images/social_icon.svg'

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