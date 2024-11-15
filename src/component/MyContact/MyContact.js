import Particle from '../Particle';
import './MyContact.css'
// import './Response'
const MyContact = () => {
    return (
        
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i className="fa-solid fa-envelope"></i> prashantkum7676@gmail.com</p>
              <p><i className="fa-solid fa-phone"></i> 7367055728</p>
              <div className="social-icons">
                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
              </div>
              {/* <a href="path_to_your_cv" download className="btn btn2">Download CV</a> */}
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">Submit</button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </div>

      
    );
  };
  
  export default MyContact;
  