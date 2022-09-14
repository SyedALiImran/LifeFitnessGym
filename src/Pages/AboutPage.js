import "./Styles/AboutStyle.css";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const AboutPage = () => {
  return (
    <>
      <div className="container parentAbout">
        <div className="gymInfo">
       
          <div className="row">
            <div className=" col-md-5 col-sm-12 col-lg-5 imggg img-fluid">
              {/* <img
                src="https://talkgolfscotland.co.uk/wp-content/uploads/2020/09/gym-4k.jpeg"
                className="img-fluid"
                alt="gym"
              /> */}
            </div>
            <div className="col-md-7 col-sm-12 col-lg-7  about_Text">
            <h2>About Life Fitness</h2>
                <p>At Life Fitness, we are committed to helping you reach your fitness goals. Our experience runs deep and our trainers know just how to get your adrenaline rushing. We believe 
                in following the latest fitness trends, and we also invest in time-tested techniques.</p>
               <p>Our gym features the best state-of-the-art strength and cardio equipment, and personal training classes that get you on track when you’re not. We believe that when you come to Life Fitness you’re not just joining another gym, you’re stepping into a world of like-minded people
                 who are here to give you everything you need to get a solid workout.</p>
            
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default AboutPage;
