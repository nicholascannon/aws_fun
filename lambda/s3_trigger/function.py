import boto3
import json
import urllib.parse

s3 = boto3.client('s3')


def handler(event, context):
    print(f'Recieved event: {json.dumps(event, indent=2)}')
    print(50*'*')

    # get obj and print contents
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = urllib.parse.unquote_plus(
        event['Records'][0]['s3']['object']['key'],
        encoding='utf-8'
    )
    try:
        res = s3.get_object(Bucket=bucket, Key=key)
        print(f'Obj content type = {res["ContentType"]}')
        print(f'Obj body = {res["Body"].read()}')
    except Exception as e:
        print(e)
