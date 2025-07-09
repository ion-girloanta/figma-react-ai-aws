import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { getSample } from './functions/get-sample/resource';
import { storage } from './storage/resource';

export const backend = defineBackend({
  auth,
  data,
  getSample,
  storage,
});

// Use existing Cognito User Pool from Terraform
backend.auth.resources.userPool.userPoolId = 'figma-app-user-pool';
backend.auth.resources.userPoolClient.userPoolClientId = 'figma-app-client';