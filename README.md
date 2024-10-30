# Airline Test

## Setup

1. Install dependencies:
    ```sh
    poetry install
    ```

2. Generate stub data:
    ```sh
    python backend/flight_data_generator.py
    ```

3. Run the FastAPI server:
    ```sh
    poetry run uvicorn backend.app.main:app --reload
    ```

4. Deploy the DynamoDB table using AWS CDK:
    ```sh
    cd infrastructure/cdk
    cdk deploy
    ```

## Frontend

Open `frontend/index.html` in your browser to view the application.# airline_test
Coding test set by ajaali consulting
