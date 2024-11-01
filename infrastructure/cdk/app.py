#!/usr/bin/env python3
import aws_cdk as cdk
from stack import AirlineTestStack

app = cdk.App()
AirlineTestStack(app, "AirlineTestStack")

app.synth()
