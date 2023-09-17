// GoogleAuth.js
"use client";
import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function GoogleAuth() {
  // const { signIn, signOut, user, error } = useGoogleOAuth({
  //   clientId: "88978267974-960jdldi46iudai4ludisduoi9h2jbuk.apps.googleusercontent.com",
  //   redirectUri: `https://codecampjr.vercel.app/select-level`,
  // });
  var decoded = jwt_decode(token);
 
console.log(decoded);

  return (
    <GoogleOAuthProvider clientId="652975357008-sut0t0e8g66jbjaqbnouk0im5ofi3a5o.apps.googleusercontent.com">
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        ;
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleAuth;
