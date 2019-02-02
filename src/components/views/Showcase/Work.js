import React from 'react';
import stomachIcon from '../../../../public/assets/images/icons8_Stomach_100px.png';
import buyIcon from '../../../../public/assets/images/icons8_Buying_100px.png';
import deliverIcon from '../../../../public/assets/images/icons8_Deliver_Food_100px.png';
// eslint-disable-next-line max-len
import createUserIcon from '../../../../public/assets/images/icons8_Add_User_Group_Woman_Man_100px.png';

export default () => (
  <section id="works" className="section-padding">
    <div className="text-center">
      <h2>How it works</h2>
      <p className="section-p-15 sec-header-p">
        Are you ready to satisfy yourself with our world class food, here is how to get started
      </p>
    </div>
    <div className="row el-card">
      <div className="col-4">
        <div className="imgcontainer">
          <img src={createUserIcon} className="col-icon" alt="" />
          <h4>CREATE AN ACCOUNT</h4>
        </div>
      </div>
      <div className="col-4">
        <div className="imgcontainer">
          <img src={buyIcon} className="col-icon" alt="" />
          <h4>MAKE ORDER</h4>
        </div>
      </div>
      <div className="col-4">
        <div className="imgcontainer">
          <img src={deliverIcon} className="col-icon" alt="" />
          <h4>WE DELIVER</h4>
        </div>
      </div>
      <div className="col-4">
        <div className="imgcontainer">
          <img src={stomachIcon} className="col-icon" alt="" />
          <h4>SATISFY YOUR STOMACH</h4>
        </div>
      </div>
    </div>
  </section>
);
