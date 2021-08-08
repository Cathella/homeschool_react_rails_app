import React from 'react'
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'
import Background from 'images/bg-purple.svg'
import BackgroundBlue from 'images/bg-blue.svg'

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;

  @media (min-width: 600px) {
    width: 500px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 900px) {
    width: 700px;
  }

  @media (min-width: 1100px) {
    width: 1100px;
    max-width: 1100px;
    text-align: left;
  }
`
export const GetstartedBtn = styled.div`
  font-weight: bold;
  color: white;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  padding: 16px 30px;
  margin-right: 25px;
  background: linear-gradient(94.53deg, #917AEB 8.02%, #00C0ED 142.37%);
`
export const UpscaleBtn = styled.div`
  font-weight: bold;
  color: black;
  border: 2px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 30px;
  background: transparent;
`
export const Header = styled.div`
  display: grid;
  align-items: center;
  margin-bottom: 100px;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    padding-top: 60px;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    line-height: 1.2;
    margin-top: 40px;
    
    @media (min-width: 600px) {
      letter-spacing: -2.5px;
      font-size: 48px;
    }

    @media (min-width: 1100px) {
      margin-top: 0;
    }
  }

  h1 span {
    color: #FA64A9;
  }

  img {
    width: 100%;
    margin-top: 60px;

    @media (min-width: 1100px) {
      margin-top: 0;
    }
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
export const CallToAction = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 50px;
  justify-content: center;

  @media (min-width: 1100px) {
    justify-content: start;
  }
`
export const BackgroundImg = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  padding-bottom: 100px;
  background-position: center 15%;

  @media (min-width: 500px) {
    background-position: center 80%;
  }

  @media (min-width: 600px) {
    background-position: center 40%;
  }

  @media (min-width: 1100px) {
    background-position: center -20%;
  }
`
export const BackgroundBlueImg = styled.div`
  background-image: url(${BackgroundBlue});
  background-position: center 20%;
  background-repeat: no-repeat;

  @media (min-width: 500px) {
    background-position: center 85%;
  }

  @media (min-width: 1100px) {
    background-position: center -35%;
  }
`
export const Features = styled.div`
  margin-top: 40px;

  @media (min-width: 1100px) {
    margin-top: 80px;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 25px;
    color: #753CBC;

    @media (min-width: 600px) {
      letter-spacing: -1px;
      font-size: 30px;
    }
  }

  h2 img {
    width: 50px;
    margin-right: 10px;
  }
`
export const Feature = styled.div`
  display: grid;
  align-items: center;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    margin-top: 100px;
  }

  img {
    width: 100%;
  }

  h2 {
    color: black;
    font-size: 25px;

    @media (min-width: 600px) {
      letter-spacing: -1px;
      font-size: 35px;
    }
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
export const Footer = styled.div`
  background: #917AEB;
  text-align: center;
  padding: 25px 0;
  font-size: 12px;
  color: white;
  font-weight: bold;
`
export const RightMargin = styled.div`
  @media (min-width: 1100px) {
    margin-right: 30px;
  }
`
export const LeftMargin = styled.div`
  @media (min-width: 1100px) {
    margin-left: 30px;
  }
`
export const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 50px;
  padding-top: 20px;

  img {
    width: 100%;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3px;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 3px;
  }
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
`
export const NavLink = styled(Link)`
  color: #51535A;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`
export const Bars = styled.div`
  display: none;
  color: #51535A;

  img {
    width: 40px;
    margin: -24px -35px 0 0;
  }

  @media screen and (max-width: 900px) {
    display: inline-block;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(Link)`
  font-weight: bold;
  color: black;
  border: 2px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 30px;
  background: transparent;

  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FA64A9;
    color: #FFFFFF;
    border: none;
  }
`
export const AppLogo = styled.div`
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
export const SubjectSection = styled.div`
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
export const Card = styled.div`
  color: white;
  padding: 30px 0;

  img {
    height: 40px;
  }
`
export const SubjectName = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  padding: 12px 0;
`
export const MathCard = styled.div`
  background-color: #00C0ED;
  border-radius: 20px;
  margin-bottom: 20px;
`
export const ScienceCard = styled.div`
  background: linear-gradient(180deg, #FED0D4 0%, #ECC3C6 100%);
  border-radius: 20px;
  margin-bottom: 20px;
`
export const SocialCard = styled.div`
  background: linear-gradient(180deg, #FDDA5F 0%, #DBBD55 100%);
  border-radius: 20px;
  margin-bottom: 20px;
`
export const EnglishCard = styled.div`
  background: #917AEB;
  border-radius: 20px;
  margin-bottom: 20px;
`
export const LessonCount = styled.div`
  font-size: 13px;
  font-weight: bold;
`

const AppElements = () => {
  return(
    <div></div>
  );
}

export default AppElements