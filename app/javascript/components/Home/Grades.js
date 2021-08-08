import React from 'react'
import { Grade } from '../AppElements'
import P1 from 'images/p1.svg'
import P2 from 'images/p2.svg'
import P3 from 'images/p3.svg'
import P4 from 'images/p4.svg'
import P5 from 'images/p5.svg'

const Grades = () => {
  return(
    <Grade>
      <div>
        <img src={P1} />
      </div>
      <div>
        <img src={P4} />
      </div>
      <div>
        <img src={P2} />
      </div>
      <div>
        <img src={P3} />
      </div>
      <div>
        <img src={P5} />
      </div>
    </Grade>
  )
}

export default Grades