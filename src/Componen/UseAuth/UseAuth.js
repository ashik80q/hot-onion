import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthProvider = (props) =>{
    const auth = Auth();
return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)



export const  PrivateRoute = ({ children, ...rest }) =>{
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
        auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }




const Auth = () =>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                const currentUser = user;
                setUser(currentUser);
            }

        })
    },[])


    const signUp = (name, email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(res => {
            firebase.auth().currentUser.updateProfile({
              displayName: name
            }).then(() => {
              setUser(res.user);
              window.history.back();
            });
          })
          .catch(err => setUser({ error: err.message }))
    
      }

    const signIn = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(res => {
            setUser(res.user);
            console.log(res.user);
            
            // window.history.back();
          })
          .catch(err => setUser({ error: err.message }))
      }

      const signOut = () => {
        return firebase.auth().signOut()
          .then(res => {
            setUser(null)
          })
      }


return {
    user,
    signIn,
    signUp,
    signOut
 }

};

export default Auth;

