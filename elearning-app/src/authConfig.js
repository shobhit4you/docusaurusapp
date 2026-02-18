export const msalConfig = {
  auth: {
    clientId: "43b8477f-4960-40c4-8e9e-0d8525308395",
    authority: "https://login.microsoftonline.com/67d1b824-bda2-416a-8719-45c1240dcefa",
    redirectUri: "http://localhost:3000",
  }
};

export const loginRequest = {
  scopes: ["api://elearning-api/access_as_user"]
};