import React from 'react'
import styled from 'styled-components'
import P1 from 'images/p1.svg'
import P2 from 'images/p2.svg'
import P3 from 'images/p3.svg'
import P4 from 'images/p4.svg'
import P5 from 'images/p5.svg'

const Grade = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 50px;
  padding-top: 20px;

  img {
    width: 100%;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const Grades = () => {
  return(
    <Grade>
      <div>
        <img src={P1} />
      </div>
      <div>
        <img src={P2} />
      </div>
      <div>
        <img src={P3} />
      </div>
      <div>
        <img src={P4} />
      </div>
      <div>
        <img src={P5} />
      </div>
    </Grade>
  )
}

export default Grades