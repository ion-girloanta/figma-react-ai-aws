import { defineFunction } from '@aws-amplify/backend';

export const getSample = defineFunction({
  name: 'get-sample',
  entry: './handler.ts',
});