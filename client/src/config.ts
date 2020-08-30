// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'j47x0joiph'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'linda45.us.auth0.com',            // Auth0 domain
  clientId: 'NFJKw5S35l5YZxpg4Qvu49Cq5VKDRtTC', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
