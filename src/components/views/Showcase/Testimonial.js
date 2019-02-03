import React from 'react';
import uImage from '../../../../public/assets/images/32.jpg';
import uImage2 from '../../../../public/assets/images/34.jpg';
import uImage3 from '../../../../public/assets/images/35.jpg';

export default () => (
  <section id="testimonials" className="section-padding">
    <div className="text-center">
      <h2>Testimonials</h2>
      <p className="section-p-15 sec-header-p">
        See what some of our users have to say about our service
      </p>
    </div>
    <div className="row">
      <div className="col-3">
        <div>
          <div className="imgcontainer">
            <img src={uImage3} alt="Avatar" className="avatar shadow" />
            <h4 style={{ marginBottom: '-10px' }}>Cara Shaw</h4>
          </div>
          <blockquote>
            <p className="section-p-15 mg-top-2">
              Food Fast has the best Fried Water I have ever tasted in my life
            </p>
          </blockquote>
        </div>
      </div>
      <div className="col-3">
        <div>
          <div className="imgcontainer">
            <img src={uImage2} alt="Avatar" className="avatar shadow" />
            <h4 style={{ marginBottom: '-10px' }}>Victor Benson</h4>
          </div>
          <blockquote>
            <p className="section-p-15 mg-top-2">Food Fast has the best Jollof Rice in Africa</p>
          </blockquote>
        </div>
      </div>
      <div className="col-3">
        <div>
          <div className="imgcontainer">
            <img src={uImage} alt="Avatar" className="avatar shadow" />
            <h4 style={{ marginBottom: '-10px' }}>John Adams</h4>
          </div>
          <blockquote>
            <p className="section-p-15 mg-top-2">
              Food Fast has the best pounded yam I have ever tasted in my life
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);
