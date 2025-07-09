# Terraform + Amplify Integration

## Overview
This setup combines Terraform-managed infrastructure with Amplify Gen 2 for a hybrid approach.

## Architecture
- **Terraform manages**: VPC, networking, existing Lambda, API Gateway, S3, CloudFront, Cognito
- **Amplify manages**: New features, auth integration, data layer, additional storage

## Integration Steps

### 1. Environment Variables
Set these in your deployment environment:
```bash
export TERRAFORM_LAMBDA_ARN="arn:aws:lambda:eu-west-1:ACCOUNT:function:get_sample"
export TERRAFORM_API_URL="https://api-id.execute-api.eu-west-1.amazonaws.com"
export TERRAFORM_S3_BUCKET="figma-react-frontend"
export TERRAFORM_CLOUDFRONT_DOMAIN="d123456789.cloudfront.net"
```

### 2. Terraform Outputs
Add to terraform/outputs.tf:
```hcl
output "cognito_user_pool_id" {
  value = aws_cognito_user_pool.user_pool.id
}

output "cognito_user_pool_client_id" {
  value = aws_cognito_user_pool_client.app_client.id
}
```

### 3. Amplify Configuration
Update frontend/src/amplifyconfiguration.json with Terraform outputs:
```json
{
  "aws_user_pools_id": "TERRAFORM_USER_POOL_ID",
  "aws_user_pools_web_client_id": "TERRAFORM_CLIENT_ID"
}
```

### 4. Deployment Flow
1. Deploy Terraform infrastructure: `terraform apply`
2. Get Terraform outputs: `terraform output`
3. Set environment variables with Terraform outputs
4. Deploy Amplify: `npx ampx sandbox`

## Benefits
- **Terraform**: Infrastructure as code, existing resources
- **Amplify**: Rapid development, managed services
- **Hybrid**: Best of both worlds

## Considerations
- Manage dependencies between Terraform and Amplify resources
- Use Terraform for stable infrastructure, Amplify for app features
- Consider using Terraform remote state for coordination