import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Subjects from './Subjects'
import Grades from './Grades'
import Menu from './Menu'
import Child from 'images/child.svg'
import FeaturesIcon from 'images/features_icon.svg'
import Background from 'images/bg-purple.svg'
import BackgroundBlue from 'images/bg-blue.svg'
import Dashboard from 'images/dashboard.svg'
import Discussion from 'images/discussion.svg'
import Quizz from 'images/quizz.svg'

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  column-gap: 40px;
  margin-bottom: 100px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: -2.5px;
  }

  h1 span {
    color: #FA64A9;
  }

  img {
    width: 100%;
    // margin: 40px 0 0 60px;
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
const BackgroundImg = styled.div`
  background-image: url(${Background});
  background-position: center -30%;
  background-repeat: no-repeat;
  padding-bottom: 100px;
`
const BackgroundBlueImg = styled.div`
  background-image: url(${BackgroundBlue});
  background-position: center -65%;
  background-repeat: no-repeat;
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
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 35px;
  position: relative;
  margin-top: 100px;

  img {
    width: 100%;
  }

  h2 {
    color: black;
    font-size: 35px;
    // margin-top: 50px;
    letter-spacing: -1px;
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
const Footer = styled.div`
  background: #917AEB;
  text-align: center;
  padding: 25px 0;
  font-size: 12px;
  color: white;
  font-weight: bold;
`
const RightMargin = styled.div`
  margin-right: 30px;
`
const LeftMargin = styled.div`
  margin-left: 30px;
`

const Home = () => {
  return(
    <div>
      <Container>
        <Menu />
        <Header>
          <div>
            <RightMargin>
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
            </RightMargin>
          </div>
          <div>
            <img src={Child} />
          </div>
        </Header>
      </Container>

      <BackgroundImg>
        <Subjects />

        <Features>
          <h2>
            <img src={FeaturesIcon} />
            <span>Features</span>
          </h2>
        </Features>

        <Container>
          <Feature>
            <div>
              <RightMargin>
                <h2>
                  Customized dashboard to show learning progress
                </h2>
                <p>Sign up for customized learning and access to discussions, tests and quizzes.</p>
                <CallToAction>
                  <Link to={``}>
                    <GetstartedBtn>Register a Child</GetstartedBtn> 
                  </Link>
                </CallToAction>
              </RightMargin>
            </div>
            <div>
                <img src={Dashboard} />
            </div>
          </Feature>
        </Container>
      </BackgroundImg>

      <Container>
        <Feature>
          <div>
              <img src={Discussion} />
          </div>
          <div>
            <LeftMargin>
              <h2>
                Live Discussions about a topic or completed lesson
              </h2>
              <p>Start a discussion about a topic or a lesson you just watched.</p>
              <CallToAction>
                <Link to={``}>
                  <GetstartedBtn>Become a Teacher</GetstartedBtn> 
                </Link>
              </CallToAction>
            </LeftMargin>
          </div>
        </Feature>
      </Container>

      <BackgroundBlueImg>
        <Container>
          <Feature>
            <div>
              <RightMargin>
                <h2>
                  Test examinations and Quizzes
                </h2>
                <p>Students can try out practise examinations to know how much they have learned.</p>
                <CallToAction>
                  <Link to={``}>
                    <GetstartedBtn>Attempt Quizzes</GetstartedBtn> 
                  </Link>
                </CallToAction>
              </RightMargin>
            </div>
            <div>
              <img src={Quizz} />
            </div>
          </Feature>
        </Container>

        <Features>
          <h2>Popular Lessons</h2>
        </Features>

        <Grades />
      </BackgroundBlueImg>

      <Footer>
        All Rights Reserved. © 2021 Homeschool - UG
      </Footer>
    </div>
  )
}

export default Home