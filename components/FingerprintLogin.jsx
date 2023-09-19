// import React, { useState } from 'react';
// import WebAuthn from 'webauthn-json';

// const FingerprintLogin = () => {
//   const [message, setMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const webAuthn = new WebAuthn();

//       // Create a credential request options object
//       const credentialRequestOptions = await webAuthn.createCredentialRequestOptions();

//       // Send the options to your server for processing
//       // Your server should validate the request and return a response
//       const response = await fetch('/api/fingerprint-login', {
//         method: 'POST',
//         body: JSON.stringify(credentialRequestOptions),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Get the response from your server
//       const serverResponse = await response.json();

//       // Complete the authentication process
//       await webAuthn.verifyAssertionResponse(serverResponse);

//       setMessage('Fingerprint authentication successful!');
//     } catch (error) {
//       console.error(error);
//       setMessage('Fingerprint authentication failed.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogin}>Login with Fingerprint</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default FingerprintLogin;
