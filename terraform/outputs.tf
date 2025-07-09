
output "lambda_function_name" {
  value = aws_lambda_function.get_sample.function_name
}

output "http_api_url" {
  value = aws_apigatewayv2_api.http_api.api_endpoint
}

output "s3_bucket_url" {
  value = aws_s3_bucket.frontend.website_endpoint
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.cdn.domain_name
}
