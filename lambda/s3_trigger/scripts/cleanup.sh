#!/usr/bin/env bash
set -e

aws lambda delete-function --function-name s3-notif-func

aws iam detach-role-policy \
    --role-name lambda-ex-tut \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

aws iam detach-role-policy \
    --role-name lambda-ex-tut \
    --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess

aws iam delete-role --role-name lambda-ex-tut

aws s3 rm s3://aws-fun-s3-trigger-123 --recursive
aws s3api delete-bucket --bucket aws-fun-s3-trigger-123
