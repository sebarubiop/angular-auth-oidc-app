import { AuthConfig } from 'angular-oauth2-oidc';

const dummyClientSecret = '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';
export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // or your OIDC provider
  // Back to proper web redirect URI
  redirectUri: typeof window !== 'undefined' ? window.location.origin : '',
  // Using Desktop Application Client ID
  clientId: '286961377120-oodrlfh1ddmoq35qfcf4d92cf12njbui.apps.googleusercontent.com',
  responseType: 'code', // Use Authorization Code Flow with PKCE
  scope: 'openid profile email',
  dummyClientSecret,
  strictDiscoveryDocumentValidation: false,
  customQueryParams: {
    prompt: 'consent'
  }
};


