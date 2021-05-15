#!/usr/bin/env bash
set -e

aws s3api create-bucket \
    --bucket aws-fun-s3-trigger-123 \
    --region ap-southeast-2 \
    --create-bucket-configuration LocationConstraint=ap-southeast-2

aws s3api put-bucket-notification-configuration \
    --bucket aws-fun-s3-trigger-123 \
    --notification-configuration file://notification.json
