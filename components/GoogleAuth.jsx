// GoogleAuth.js
"use client";
import React from 'react';
// import { useGoogleOneTapLogin } from '@react-auth/google';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const GoogleAuth = () => {
 

  return (
    <div>
      <GoogleOAuthProvider clientId="220848079763-ljc1j00fmuamub2rkq1f98403m00mab8.apps.googleusercontent.com">
                  <div className="w-full h-full ">
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        var decoded = jwt_decode(credentialResponse.credential);

                        console.log(decoded);
                        const { family_name, given_name, name, email } =
                          decoded;
                        const fname = family_name;
                        const lname = given_name;
                       

                        handleAuthuser({ fname, lname, email });
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      logo_alignment="center"
                      text="continue_with"
                      useOneTap
                    />
                    ;
                  </div>
                </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuth;

