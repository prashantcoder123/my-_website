import React, { useEffect, useState } from 'react';
import './Contact.css';
// import '../../ScrollBar.css';
import emailjs from 'emailjs-com';
import { ThreeDots } from 'react-loader-spinner';


const Contact = () => {
    
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
    

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    
    // Replace with your EmailJS service ID and template ID
    const serviceId = 'service_hc9mzah';
    const templateId = 'template_juy10kf';
    const userId = '-qPR3qkqnB-Z1F_Y2';

    // Create the email parameters object
    const params = {
      from_firstname: firstName,
      from_lastname: lastName,
      from_email: email,
      message: message,
    };
    emailjs.send(serviceId, templateId, params, userId)
    .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Reset the form after successful submission
        setfirstName('');
        setlastName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('Message sent successfully!✅');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSuccessMessage('An error occurred while sending the message.❌');
      })
      .finally(() => {
        setLoading(false); // Hide the loader after the email is sent (success or error)
      });
      
  };

  useEffect(() => {
    let timeoutId;

    if (successMessage) {
      // Set a timer to clear the success message after 3 seconds (3000 milliseconds)
      timeoutId = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }

    return () => {
      // Clear the timer if the component is unmounted before the timeout expires
      clearTimeout(timeoutId);
    };
  }, [successMessage]);
    return (
        <>
            <div className='contact' id='contact'>
                <div className='contactdata'>
                    <h1 className='contactheading'>Contact☎️<hr/></h1>

                    <div className='contactcontent'>
                        <div className='contactinfo'>
                            <form onSubmit={handleSubmit}>
                                <div className='namebar'>
                                    <input type='text' value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder='First Name' required></input>
                                    <input className='lastNameInput' type='text' value={lastName} onChange={(e) => setlastName(e.target.value)} placeholder='Last Name'></input>
                                </div>
                                <input className='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your E-Mail' required></input>
                                <textarea className='textarea' value={message} onChange={(e) => setMessage(e.target.value)} rows="10" placeholder='Your Message'></textarea>
                                <button disabled={loading} title='loadButton'>{loading ? (<ThreeDots color="#111" height={20} width={30} /> ) : ( 'Send' )}</button>
                                {successMessage && <div className='message'><p>{successMessage}</p></div>}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Contact;
