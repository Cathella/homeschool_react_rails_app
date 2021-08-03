import React from 'react'
import styled from 'styled-components'
import Logo from 'images/logo.svg'
import Child from 'images/child.svg'
import MathsIcon from 'images/math_icon.svg'
import EnglishIcon from 'images/english_icon.svg'
import ScienceIcon from 'images/science_icon.svg'
import SocialIcon from 'images/social_icon.svg'
import FeaturesIcon from 'images/features_icon.svg'
import Background from 'images/bg-purple.svg'
import Dashboard from 'images/dashboard.svg'
import Discussion from 'images/discussion.svg'
import Quizz from 'images/quizz.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  a {
    text-decoration: none;
  }
`
const AppLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    text-transform: uppercase;
    color: black;
    font-weight: bold;
  }

  img {
    width: 45px;
    margin-right: 10px;
  }
`
const LeftLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;

  a {
    color: #51535A;
    margin-left: 15px;
    margin-right: 15px;
  }
`
const SignupBtn = styled.div`
  font-weight: bold;
  color: black;
  border: 2px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 10px 20px;
`
const GetstartedBtn = styled.div`
  font-weight: bold;
  color: white;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  padding: 16px 30px;
  margin-right: 25px;
  background: linear-gradient(94.53deg, #917AEB 8.02%, #00C0ED 142.37%);
`
const UpscaleBtn = styled.div`
  font-weight: bold;
  color: black;
  border: 2px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 30px;
  background: transparent;
`
const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  margin-bottom: 100px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin-top: 200px;
    line-height: 1.2;
    letter-spacing: -2px;
  }

  h1 span {
    color: #FA64A9;
  }

  img {
    width: 600px;
    margin: 40px 0 0 60px;
  }

  p {
    color: #51535A;
    font-size: 19px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }
`
const CallToAction = styled.div`
  display: flex;
  margin-top: 20px;
`
const SubjectSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 35px;
  text-align: center;
  width: 1200px;
  margin: 0 auto;
  position: relative;
`
const MathCard = styled.div`
  background-color: #00C0ED;
  border-radius: 25px;
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
const ScienceCard = styled.div`
  border-radius: 25px;
  color: white;
  padding: 30px 0;
  background: linear-gradient(180deg, #FED0D4 0%, #ECC3C6 100%);

  img {
    width: 40px;
  }

  p {
    text-transform: uppercase;
    font-weight: bold;
  }
`
const SocialCard = styled.div`
  border-radius: 25px;
  color: white;
  padding: 30px 0;
  background: linear-gradient(180deg, #FDDA5F 0%, #DBBD55 100%);

  img {
    width: 40px;
  }

  p {
    text-transform: uppercase;
    font-weight: bold;
  }
`
const EnglishCard = styled.div`
  border-radius: 25px;
  color: white;
  padding: 30px 0;
  background: #917AEB;

  img {
    width: 40px;
  }

  p {
    text-transform: uppercase;
    font-weight: bold;
  }
`
const BackgroundImg = styled.div`
  background-image: url(${Background});
  height: 800px;
  background-position: center top;
  position: relative;
  top: -120px;
  z-index: -99;
`
const LessonCount = styled.div`
  font-size: 13px;
  font-weight: bold;
`
const Features = styled.div`
  position: relative;
  margin-top: 100px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: -1px;
    color: #753CBC;
  }

  h2 img {
    width: 50px;
    margin-right: 10px;
  }
`
const Feature = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 35px;
  position: relative;
  margin-top: 100px;

  img {
    width: 600px;
  }

  h2 {
    color: black;
    font-size: 35px;
  }

  p {
    color: #51535A;
    font-size: 19px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

`

const Home = () => {
  return(
    <div>
      <Container>
        <Nav>
          <Link to={`/`}>
            <AppLogo>
              <img src={Logo} />
              <span>Homeschool</span>
            </AppLogo>
          </Link>
          
          <LeftLinks>
            <Link to={`/`}>Teachers</Link>
            <Link to={`/`}>Children</Link>
            <Link to={`/lessons`}>Lessons</Link>
            <Link to={`/`}>
              <SignupBtn>Signup</SignupBtn>
            </Link>
          </LeftLinks>
        </Nav>

        <Header>
          <div>
            <h1>
              Organized video lessons for your child’s learning<span>.</span>
            </h1>
            <p>Sign up for customized learning and access to discussions, tests and quizzes.</p>
            <CallToAction>
              <Link to={``}>
                <GetstartedBtn>Get started</GetstartedBtn> 
              </Link>
              <Link to={``}>
                <UpscaleBtn>Upscale</UpscaleBtn>
              </Link>
            </CallToAction>
          </div>
          <div>
            <img src={Child} />
          </div>
        </Header>
      </Container>

      <SubjectSection>
          <MathCard>
            <img src={MathsIcon} />
            <p>Mathematics</p>
            <LessonCount>100+ Lessons</LessonCount>
          </MathCard>
          <ScienceCard>
            <img src={ScienceIcon} />
            <p>Science</p>
            <LessonCount>100+ Lessons</LessonCount>
          </ScienceCard>
          <SocialCard>
            <img src={SocialIcon} />
            <p>Social studies</p>
            <LessonCount>100+ Lessons</LessonCount>
          </SocialCard>
          <EnglishCard>
            <img src={EnglishIcon} />
            <p>English</p>
            <LessonCount>100+ Lessons</LessonCount>
          </EnglishCard>
      </SubjectSection>

      <Features>
        <h2>
          <img src={FeaturesIcon} />
          <span>Features</span>
        </h2>

        <Container>
          <Feature>
            <div>
              <h2>
                Customized dashboard to show learning progress
              </h2>
              <p>Sign up for customized learning and access to discussions, tests and quizzes.</p>
              <CallToAction>
                <Link to={``}>
                  <GetstartedBtn>Register Child</GetstartedBtn> 
                </Link>
              </CallToAction>
            </div>
            <div>
              <img src={Dashboard} />
            </div>
          </Feature>

          <Feature>
            <div>
              <img src={Discussion} />
            </div>
            <div>
              <h2>
                Customized dashboard to show learning progress
              </h2>
              <p>Sign up for customized learning and access to discussions, tests and quizzes.</p>
              <CallToAction>
                <Link to={``}>
                  <GetstartedBtn>Become a Teacher</GetstartedBtn> 
                </Link>
              </CallToAction>
            </div>
          </Feature>

          <Feature>
            <div>
              <h2>
                Customized dashboard to show learning progress
              </h2>
              <p>Sign up for customized learning and access to discussions, tests and quizzes.</p>
              <CallToAction>
                <Link to={``}>
                  <GetstartedBtn>Attempt Quiz</GetstartedBtn> 
                </Link>
              </CallToAction>
            </div>
            <div>
              <img src={Quizz} />
            </div>
          </Feature>
        </Container>
      </Features>
    </div>
  )
}

export default Home