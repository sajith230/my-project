import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './packege.css'
import sapa from './sapa.jpg'
import da from './da.jpg'

function Package() {
  return (
    <div>


        <Navbar></Navbar>


        <header>
        <h1>Packages - InfiniteDestiny</h1>
    </header>

    <section class="package">
        <h3>Basic Membership</h3>
        <p>Unlock essential features to kickstart your journey.</p>
        <ul>
            <li>Access to curated content</li>
            <li>Monthly newsletter</li>
            <li>Community forum access</li>
        </ul>
        <p>Price: $9.99/month</p>
        <button>Get Started</button>
    </section>

    <section class="package">
        <h3>Premium Membership</h3>
        <p>Take your growth to the next level with premium features.</p>
        <ul>
            <li>Everything in Basic Membership</li>
            <li>Personalized growth plans</li>
            <li>Exclusive webinars and events</li>
            <li>Early access to new features</li>
        </ul>
        <p>Price: $19.99/month</p>
        <button>Get Started</button>
    </section>

    <section class="package">
        <h3>Ultimate Membership</h3>
        <p>Experience the full potential of InfiniteDestiny.</p>
        <ul>
            <li>Everything in Premium Membership</li>
            <li>One-on-one coaching session</li>
            <li>Access to premium courses</li>
            <li>Priority support</li>
        </ul>
        <p>Price: $49.99/month</p>
        <button>Get Started</button>
    </section>

    <footer>
        <p>Choose the package that fits your journey. Thank you for choosing InfiniteDestiny!</p>
    </footer>
<ul id='sa'>



<img src={da} id='sapa'  alt='baes'/>
</ul>
<center>

<h1>Select Your Travel Package</h1>

<form id="packageForm">
  <div>
    <input type="checkbox" id="package1" name="package" value="Package 1"/>
    <label for="package1">Package 1</label>
  </div>

  <div>
    <input type="checkbox" id="package2" name="package" value="Package 2"/>
    <label for="package2">Package 2</label>
  </div>

  <div className='saman'>
    <label for="selectPackage">Select Package 3:</label>
    <select id="selectPackage" name="selectPackage">
      <option value="Package 3A">Package 3A</option>
      <option value="Package 3B">Package 3B</option>
    </select>
  </div>

 

  <button type="button" id='buto' onclick="submitForm()">Submit</button>
</form>


</center> 
    
    </div>
  )
}

export default Package