import React from 'react'
import './Contact.css'
import email_icon from '../../assets/email_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ed36c98a-d6a5-4561-b06d-28175705382e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

      
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>"I’m currently looking for new opportunities to restart my career after a short break, I wrapped up my previous role in November. Now, I’m open to frontend development roles and always eager to contribute, learn, and grow. Feel free to reach out."</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email_icon} alt="" height={50} width={50} /> <p>lathakumari.m443@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" height={50} width={50}/> <p>+91  9392733070 </p>
                       
                        
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt=""  height={50} width={50}/> <p>Hyderabad, Telangana</p>
                        
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="" required>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'  required/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'  required/>
                <label htmlFor="">Write your message here..</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
