import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'biu-reg-storage',
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write'])
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read', 'write'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write'])
    ]
  })
});