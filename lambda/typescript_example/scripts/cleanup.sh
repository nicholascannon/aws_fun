#!/usr/bin/env bash
set -e;

echo "Cleaning up...";

aws lambda delete-function --function-name ts-function;
aws iam detach-role-policy --role-name ts-lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole;
aws iam delete-role --role-name ts-lambda-ex;

echo "Done! but you need to delete cloudwatch logs from the console!!";