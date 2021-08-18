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
  // position: relative;
  // z-index: -20;

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
    color: #FA64A9;
    font-weight: bold;
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
  border-radius: 8px;
  padding: 0.6em 1.5em;
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
export const NavSection = styled.div`
  border-bottom: 1px solid #ddd;
`
export const AppLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -15px;

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
export const LessonVideo = styled.div`
  position: relative;

  iframe {
    width: 100%;
    height: 190px;
    border: 1px solid #fefefe;
    border-radius: 10px 10px 0 0;
    position: relative;
    top: 0;
  }

  a {
    display: block;
    position: absolute;
    width: 100%;
    top: 10px;
  }

  div {
    height: 180px;
    background: red;
    opacity: 0;
  }
`
export const Video = styled.div`
  iframe {
    width: 100%;
    height: 380px;
    margin: 15px auto 10px;
    border: 1px solid #fefefe;
    border-radius: 10px;
  }
`
export const Subheader = styled.div`
  font-weight: 300;
  font-size: 22px;
`
export const Tag = styled.div`
  text-decoration: none;
  font-size: 12px;
  background: #917aeb;
  color: white;
  padding: 2px 10px;
  border-radius: 4px;
  margin: 0 2px 3px;
`
export const SearchTags = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto 0;
  flex-wrap: wrap;
  width: 65%;

  a {
    text-decoration: none;
  }
`
export const SearchForm = styled.div`
  margin: 20px 0 15px;

  form {
    padding: 0;
    margin: 0 auto;
    position: relative;
    width: 60%;
    display: flex;
    align-items: center;
  }

  input {
    width: 97%;
    height: 47px;
    margin: 0 auto;
    border-radius: 10px;
    border: none;
    font-size: 17px;
    padding-left: 15px;
    background-color: #FDF8F9;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.03);
  }

  button {
    height: 45px;
    border: none;
    border-radius: 10px;
    padding: 0 20px;
    font-size: 15px;
    font-weight: bold;
    background: #fa64a9;
    position: absolute;
    color: white;
    right: 4.2px;
    cursor: pointer;
  }
`
export const LessonTitle = styled.div`
  padding: 10px 0 10px;
  font-size: 14px;
  font-weight: bold;
`
export const About = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 10px;

  div {
    background: #ffa4ce;
    color: black;
  }
`
export const Form = styled.form`
  position: relative;
  margin: 2em auto 6em;
  border: 1.4px solid gray;
  padding: 3em 0 4em;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 30px;
  background: #ffeeef;

  input {
    height: 45px;
    border-radius: 10px;
    border: 1.4px solid gray;
    margin: 0 3.5em 1.2em;
    padding: 0 1em;

    :focus {
      outline: none;
      background: #f2f5c6;
    }
  }

  input[type=submit] {
    border: 0;
    font-weight: bold;
    margin-bottom: 0;
    background: #FA64A9;
    color: #FFFFFF;
    text-transform: capitalize;
    height: 50px;
    border-radius: 25px;
  }

  label {
    text-align: center;
    font-size: 1.4em;
    margin-bottom: 1em;
    font-weight: bold;
    text-transform: capitalize;
  }

  div {
    background: white;
    height: 338px;
    width: 100%;
    border: 1.4px dashed gray;
    position: absolute;
    top: 10px;
    left: 8px;
    border-radius: 40px;
    z-index: -10;
  }
`
export const BackImg = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  height: 300px;
  background-position: center 0%;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -20;
  transform: rotate(180deg);
`
export const BackBlueImg = styled.div`
  background-image: url(${BackgroundBlue});
  background-repeat: no-repeat;
  height: 250px;
  background-position: center 0%;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -20;
  transform: rotate(180deg);
`

const AppElements = () => {
  return(
    <div></div>
  );
}

export default AppElements