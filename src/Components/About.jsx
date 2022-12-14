import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio alias, doloribus recusandae illum laboriosam harum ipsum sequi quibusdam totam. Quam amet laudantium iusto aspernatur magni quae, similique ut minus quos vero, incidunt praesentium vel!</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About