#!/usr/bin/env python3
import os
from dotenv import load_dotenv
from aws_cdk import App, Environment
from stack import AirlineTestStack

load_dotenv()  # Load .env variables

app = App()
env = Environment(account=os.getenv("AWS_ACCOUNT"), region=os.getenv("AWS_REGION"))
AirlineTestStack(app, "AirlineTestStack")

app.synth()
