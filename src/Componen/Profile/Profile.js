import React from 'react';
import Auth from '../UseAuth/UseAuth';

const Profile = () => {

    const auth = Auth();
   
    
    return (
        <div className="container">
            <div className="card border-primary m-auto d-block">
               <img src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' className="card-img-top w-25 d-block m-auto" alt=""/>
              <div className="card-body">
              {
                   auth.user?
                  <h5>{auth.user.displayName}</h5>:
                   <h5> </h5>
               }
               {
                   auth.user?
                   <p>{auth.user.email}</p>
                   : <p> </p>
               }
              </div>
            </div>
            <div className="row">
                <div className="col m-4">
                   <h3 className="text-center m-auto">You are SignUp in Website</h3>
                </div>

            </div>
           
        </div>
    );
};

export default Profile;