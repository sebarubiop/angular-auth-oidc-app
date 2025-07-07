import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // or your OIDC provider
  redirectUri: typeof window !== 'undefined' ? window.location.origin : '',
  clientId: '286961377120-vo1bs2vigh895nf2be7t8uo4b3ftvijn.apps.googleusercontent.com',
  responseType: 'code', // Use Authorization Code Flow with PKCE
  dummyClientSecret: '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',
  scope: 'openid profile email',
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
  customQueryParams: {
    prompt: 'consent'
  }
};
