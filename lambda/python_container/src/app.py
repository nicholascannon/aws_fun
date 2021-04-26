import sys
import boto3

def handler(event, context):
    print('Function info:')
    print(f'* Event = {event}')
    print(f'* Conext = {context}')
    print(f'* Sys version = {sys.version}')
    print(f'* Boto version = {boto3.__version__}', end='\n\n')

    try:
        s3 = boto3.client('s3')
        print(s3.list_buckets())
        return 'Hello from lambda!!'
    except Exception as e:
        print(e, file=sys.stderr)
        return 'An error has occurred'
