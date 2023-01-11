import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pt1 (1).jpeg'
import IMG2 from '../../assets/pt1 (2).jpeg'
import IMG3 from '../../assets/pt1 (5).jpeg'
import IMG5 from '../../assets/pt1 (8).jpeg'
import IMG4 from '../../assets/Screenshot (35).png'
import IMG6 from '../../assets/Screenshot (46).png'
import IMG7 from '../../assets/Screenshot (47).png'
import IMG8 from '../../assets/Screenshot (48).png'
import IMG9 from '../../assets/Screenshot (49).png'
import IMG10 from '../../assets/Screenshot (51).png'
import IMG11 from '../../assets/Screenshot (52).png'





const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food Delivery Website',
    desc: 'Front-end made with PHP and Back-end with Mysql , Facebook as well as Google login , Stripe Payment Gateway , Google pincode used to find food.',
    demo: 'https://mealfactory.ca/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Gym Website',
    desc: 'Full Website with only frontend made with react , Icons with react-icons , Full mobile responsive , No css framework used.',
    demo: 'https://msreactgym.netlify.app'
  },
  
  {
    id: 5,
    image: IMG3,
    title: 'NGO Website',
    desc: 'It is a Real project made with Angular at front-end , Bootstrap used to styling , Full mobile responsive , Icons through Font-Awesome.',
    demo: 'https://kyvf.in/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Music Player',
    desc: 'Great music player made with React at front-end , Songs comes from Rapid API, Tailwind used to styling , Full mobile responsive , Icons through Font-Awesome.',
    demo: 'https://msxspotify.netlify.app'
  },
  {
    id: 3,
    image: IMG5,
    title: 'Barber Website',
    desc: 'Barber website made with Html,css at front-end , Full mobile responsive , Icons through Font-Awesome.',
    demo: 'https://msxspotify.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tailwind Website',
    desc: 'Only frontend website made with the tailwind , fully mobile responsive',
    demo: 'https://msxtailwind.netlify.app'
  },
  {
    id: 7,
    image: IMG7,
    title: 'School Website',
    desc: 'Only frontend website made with the HTML , CSS , JS , fully mobile responsive , swiper js used for Testimonials',
    demo: 'https://msxschool.netlify.app'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Marriage Website',
    desc: 'Only frontend website made with Quarkly , fully mobile responsive',
    demo: 'https://msxschool.netlify.app'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Event Website',
    desc: 'Only frontend website made with Teleport, fully mobile responsive',
    demo: 'https://msxevent.netlify.app'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Builder Website',
    desc: 'Only frontend website made with Bootstrap on react, fully mobile responsive',
    demo: 'https://msxreactbootstrap.netlify.app/'
  }
  ,
  {
    id: 11,
    image: IMG11,
    title: 'PSD TO REACT Website',
    desc: 'Only frontend website made with Bootstrap on react, fully mobile responsive',
    demo: 'https://msxpsdtoreact.netlify.app/'
  }


  

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, demo, desc }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div className="portfolio__item-cta">
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio