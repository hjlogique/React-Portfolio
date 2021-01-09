
// ============  About.js ============

import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         // var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url} target='_blank'><i className={network.className}></i>{" . . . " + network.name + ""}</a></li>
         })
         var website = this.props.data.website;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details"><br></br>
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>
                              {/* {street}<br /> */}
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span><br />
                           <a href={website} target='_blank'>
                              {website}
                           </a>
                        </p>
                     </div><br></br>
                     <div className="columns download">
                        <a href={resumeDownload} className="button" target='_blank' download><i className="fa fa-download"></i>Download Resume</a>
                        <ul className="social-links">
                           {networks}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
