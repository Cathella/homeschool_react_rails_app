import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, GetstartedBtn, UpscaleBtn, Header, CallToAction, BackgroundImg, BackgroundBlueImg, Features, Feature, Footer, RightMargin, LeftMargin } from '../AppElements'
import Subjects from './Subjects'
import Grades from './Grades'
import Menu from './Menu'
import Child from 'images/child.svg'
import FeaturesIcon from 'images/features_icon.svg'
import Dashboard from 'images/dashboard.svg'
import Discussion from 'images/discussion.svg'
import Quizz from 'images/quizz.svg'

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
                <GetstartedBtn>Get&nbsp;started</GetstartedBtn> 
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
        <Container>
          <Subjects />
        </Container>

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
                    <GetstartedBtn>Register a Student</GetstartedBtn> 
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
                  <GetstartedBtn>Join Discussions</GetstartedBtn> 
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