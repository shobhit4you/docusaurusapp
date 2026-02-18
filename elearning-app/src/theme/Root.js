// import React, { useEffect } from "react";
// import appInsights from "../appInsights";

// export default function Root({ children }) {
//   useEffect(() => {
//     appInsights.trackPageView();
//   }, []);

//   return <>{children}</>;
// }

import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

export default function Root({ children }) {
  return (
    <MsalProvider instance={msalInstance}>
      {children}
    </MsalProvider>
  );
}