from aws_cdk import Stack
import aws_cdk.aws_dynamodb as dynamodb
from constructs import Construct  # constructs is now the base library for AWS CDK constructs
from dotenv import load_dotenv



class AirlineTestStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        table = dynamodb.Table(
            self, "FlightsTable",
            partition_key=dynamodb.Attribute(name="flight_id", type=dynamodb.AttributeType.STRING)
        )

