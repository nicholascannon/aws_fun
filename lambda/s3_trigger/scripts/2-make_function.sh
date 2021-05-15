#!/usr/bin/env bash
set -e

if [[ $1 -eq 0 ]];then
    echo "Error: please supply function role ARN"
    exit 1
fi

echo "building deployment package"
zip function.zip function.py

aws lambda create-function \
    --function-name s3-py-example \
    --zip-file fileb://function.zip \
    --handler function.handler \
    --runtime python3.8 \
    --role $1

# allow the s3 bucket to invoke lambda
aws lambda add-permission \
    --function-name s3-py-example \
    --principal s3.amazonaws.com \
    --statement-id s3invoke \
    --action "lambda:InvokeFunction" \
    --source-arn arn:aws:s3:::aws-fun-s3-trigger-123 \
    --source-account 696091413426 # important!
