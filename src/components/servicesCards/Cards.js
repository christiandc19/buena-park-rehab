import React from 'react'
import './Cards.css'
// import ServicesCards from '../props/CardProps';

// import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const Cards = () => {
  return (
    <>
            <div className="cards-header container">
                <h1>WE OFFER VARIOUS SERVICES </h1>
                <br/>
                <p>At Buena Park Rehab Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>

            <div className='cards-container'>
                <div className='card'>
                    <img className='card-image' src={Card1} alt="Mental Health" loading="lazy"/>
                    <div className='intro'>
                        <h1 className='card-title'>MENTAL HEALTH TREATMENT</h1>
                        <p className='card-desc'>Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety. Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>
                    </div>
                </div>
            

                <div className='card'>
                    <img className='card-image' src={Card2} alt="Mental Health" loading="lazy"/>
                    <div className='intro'>
                        <h1 className='card-title'>SUBSTANCE ABUSE TREATMENT</h1>
                        <p className='card-desc'>No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Contra Costa Rehab Center.</p>
                    </div>
                </div>

                <div className='card'>
                    <img className='card-image' src={Card3} alt="Mental Health" loading="lazy"/>
                    <div className='intro'>
                        <h1 className='card-title'>EMPLOYMENT ASSITANCE</h1>
                        <p className='card-desc'>We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
                    </div>
                </div>
            </div>


        {/* <div className='cards'>
            <div className='card-container'>
                <Fade bottom>
                    <ServicesCards
                        Image={Card1}
                        CardName="MENTAL HEALTH TREATMENT​"
                        Description="Clients suffer from both mental health disorders and addiction. Therefore, we provide treatment for co-occurring disorders, addressing both conditions simultaneously."
                    />
                </Fade>

                <Fade top>
                    <ServicesCards
                        Image={Card2}
                        CardName="SUBSTANCE USE TREATMENT"
                        Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
                    />
                </Fade>

                <Fade bottom>
                    <ServicesCards
                        Image={Card3}
                        CardName="EMPLOYMENT / JOB ASSISTANCE"
                        Description="There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services. Jobs Assistance is available."
                    />
                </Fade>
            </div>
        </div> */}
    </>
  )
}

export default Cards
