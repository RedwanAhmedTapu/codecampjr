// GoogleAuth.js
"use client"
import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

function GoogleAuth() {
  // const { signIn, signOut, user, error } = useGoogleOAuth({
  //   clientId: "88978267974-960jdldi46iudai4ludisduoi9h2jbuk.apps.googleusercontent.com",
  //   redirectUri: `https://codecampjr.vercel.app/select-level`,
  // });

  return (
    <div>
    <GoogleOAuthProvider clientId="<88978267974-960jdldi46iudai4ludisduoi9h2jbuk.apps.googleusercontent.com>">
    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </GoogleOAuthProvider>;
    </div>
  );
}

export default GoogleAuth;
