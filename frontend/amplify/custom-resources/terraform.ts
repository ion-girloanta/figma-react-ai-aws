import { defineBackend } from '@aws-amplify/backend';
import { Stack } from 'aws-cdk-lib';
import { CfnOutput } from 'aws-cdk-lib';

export function addTerraformOutputs(backend: ReturnType<typeof defineBackend>) {
  const stack = Stack.of(backend.auth.resources.userPool);
  
  // Import existing Terraform resources
  new CfnOutput(stack, 'TerraformLambdaArn', {
    value: process.env.TERRAFORM_LAMBDA_ARN || '',
    description: 'Lambda function ARN from Terraform',
  });
  
  new CfnOutput(stack, 'TerraformApiGatewayUrl', {
    value: process.env.TERRAFORM_API_URL || '',
    description: 'API Gateway URL from Terraform',
  });
  
  new CfnOutput(stack, 'TerraformS3Bucket', {
    value: process.env.TERRAFORM_S3_BUCKET || '',
    description: 'S3 bucket name from Terraform',
  });
  
  new CfnOutput(stack, 'TerraformCloudFrontDomain', {
    value: process.env.TERRAFORM_CLOUDFRONT_DOMAIN || '',
    description: 'CloudFront domain from Terraform',
  });
}