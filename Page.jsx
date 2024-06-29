import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './page.css';
import sf from './sf.jpg'
function Page() {
  return (
    <div>


     
<Navbar></Navbar>



    <header>
        <h1>About InfiniteDestiny</h1>
    </header>

    <section>
        <h2>Welcome to InfiniteDestiny!</h2>
        <p>At InfiniteDestiny, our mission is to inspire and empower individuals to reach their full potential...</p>
    </section>

    <section>
        <h2>Our Story</h2>
        <p>InfiniteDestiny was founded in [2023] by [Sajith]. It all began with a simple idea: to create a space where people could find inspiration, motivation, and resources to pursue their dreams...</p>
    </section>

   

    <section>
        <h2>Our Values</h2>
        <ul>
            <li><strong>Inspiration:</strong> We aim to inspire action and positive change.</li>
            <li><strong>Empowerment:</strong> We empower individuals to overcome challenges and seize opportunities.</li>
            <li><strong>Community:</strong> We foster a supportive community where everyone's journey is celebrated.</li>
        </ul>
    </section>

    <section>
        <h2>What Sets Us Apart</h2>
        <ul>
            <li><strong>Infinite Inspiration Hub:</strong>
                <p>Immerse yourself in our Infinite Inspiration Hub, a curated collection of success stories, motivational content, and expert advice tailored to fuel your journey.</p></li>
            <li> <strong>Interactive Community Challenges:</strong>
                <p>Join our vibrant community and participate in interactive challenges that encourage personal and collective growth. Connect, support, and celebrate successes together!</p></li>
  
        </ul>
    </section>

    <section>
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Connect with us on [social media links] and join the conversation. For inquiries, partnerships, or collaborations, reach out to [gmail:infinitedestinytravel2024@gmail.com].</p>
    </section>

    <footer>
        <p>Thank you for being part of the InfiniteDestiny community!</p>
    </footer>


<img src={sf} id='ph'  alt='ad'/>

    </div>
  )
}

export default Page