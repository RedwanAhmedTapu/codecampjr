// GoogleAuth.js
"use client"
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleAuth() {
  // const { signIn, signOut, user, error } = useGoogleOAuth({
  //   clientId: "88978267974-960jdldi46iudai4ludisduoi9h2jbuk.apps.googleusercontent.com",
  //   redirectUri: `https://codecampjr.vercel.app/select-level`,
  // });

  return (
    <div>
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
   
    </div>
  );
}

export default GoogleAuth;
