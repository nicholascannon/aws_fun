#!/usr/bin/env bash
set -e;

echo "Bootstrapping infrastructure...";

aws iam create-role --role-name ts-lambda-ex --assume-role-policy-document file://trust-policy.json;
aws iam attach-role-policy --role-name ts-lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole;

echo "Done!";