export const msalConfig = {
  auth: {
    clientId: "################################",
    authority: "https://login.microsoftonline.com/tenantid",
    redirectUri: "http://localhost:3000",
  }
};

export const loginRequest = {
  scopes: ["api://elearning-api/access_as_user"]
};