import './Styles/ContactStyle.css'

const Contact = () => {
  return (
    <>
        <div className="container-fluid contact_parent" id='contactUs'>
            <div className="input-area">
        <h2 className='mb-3'>Contact Us</h2>
            <form>
  <div className="mb-3 boxes">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder='Email' autoComplete='off' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 boxes">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder='Name' autoComplete='off' id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 boxes">
    <label for="exampleInputPassword1" className="form-label">Message</label>
    <textarea name="subject" id="mail_subject" className='form-control'  placeholder='Write Message' cols="30" rows="10"></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary form-control submitBTN">Submit</button>
</form>
            </div>
            
        </div>
    </>
  )
}

export default Contact