from aws_cdk import core
import aws_cdk.aws_dynamodb as dynamodb

class AirlineTestStack(core.Stack):
    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        table = dynamodb.Table(
            self, "FlightsTable",
            partition_key=dynamodb.Attribute(name="flight_id", type=dynamodb.AttributeType.STRING)
        )
from aws_cdk import core

class AirlineTestStack(core.Stack):
    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)
        # Define your stack resources here