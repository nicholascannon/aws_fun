#!/usr/bin/env bash
set -e

aws iam create-role \
    --role-name lambda-ex-tut \
    --assume-role-policy-document file://trust-policy.json

aws iam attach-role-policy \
    --role-name lambda-ex-tut \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

aws iam attach-role-policy \
    --role-name lambda-ex-tut \
    --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess
