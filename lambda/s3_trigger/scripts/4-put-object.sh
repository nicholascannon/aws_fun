#!/usr/bin/env bash
set -e

aws s3api put-object \
    --bucket aws-fun-s3-trigger-123 \
    --key sample.txt \
    --body sample.txt