# Docker python container example
Example python lambda function that prints environment and lists all the buckets in the account, locally tested in docker.

## To run the container locally
Tutorial: https://docs.aws.amazon.com/lambda/latest/dg/python-image.html

1. Build and tag docker image

2. Run container
```bash
docker run \
    -p 8080:8080 \
    -e AWS_ACCESS_KEY_ID=**** \
    -e AWS_SECRET_ACCESS_KEY=**** \
    lambda-py-example
```

3. Invoke function with:
```bash
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" -d '{}'
```

## Zip source and make function
Tutorial: https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html

1. Create execution role
```bash
aws iam create-role --role-name lambda-ex-tut --assume-role-policy-document file://trust-policy.json
```

2. Attach policies to role
```bash
aws iam attach-role-policy --role-name lambda-ex-tut --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
aws iam attach-role-policy --role-name lambda-ex-tut --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess
```

3. Zip function
```bash
zip function.zip src/*
```

4. Create function (after creating role)
```bash
aws lambda create-function \
    --function-name my-py-func \
    --zip-file fileb://function.zip \
    --handler src.app.handler \
    --runtime python3.8 \
    --role arn:aws:iam::696091413426:role/lambda-ex-tut
```

5. Invoke the function (and decode base64 logs)
```bash
aws lambda invoke \              
    --function-name my-py-func \
    out \       
    --log-type Tail \
    --query 'LogResult' \
    --output text | base64 -d
```

6. Cleanup function (delete role and cloudwatch logs too)
```bash
aws lambda delete-function --function-name my-py-func   
```