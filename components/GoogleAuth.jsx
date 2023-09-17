// GoogleAuth.js
"use client"
import React, { useState } from 'react';
import { useGoogleOAuth } from 'react-oauth/google';
import { GOOGLE_CLIENT_ID, REDIRECT_URI } from './config';

function GoogleAuth() {
  const { signIn, signOut, user, error } = useGoogleOAuth({
    clientId: "88978267974-960jdldi46iudai4ludisduoi9h2jbuk.apps.googleusercontent.com",
    redirectUri: `https://codecampjr.vercel.app/select-level`,
  });

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={signIn}>Sign In with Google</button>
          {error && <p>Error: {error.message}</p>}
        </div>
      )}
    </div>
  );
}

export default GoogleAuth;
