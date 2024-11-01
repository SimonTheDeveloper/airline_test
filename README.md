# Airline Test

## Setup

1. **Install dependencies**:
    Open a terminal and run the following command to install the project dependencies using Poetry:
    ```sh
    poetry install
    ```

2. **Deploy the DynamoDB table using AWS CDK**:
    Navigate to the `infrastructure/cdk` directory and deploy the DynamoDB table by running:
    ```sh
    cd infrastructure/cdk
    cdk deploy
    ```

3. **Generate stub data**:
    After deploying the DynamoDB table, generate the stub data by running the following command:
    ```sh
    python backend/flight_data_generator.py
    ```

4. **Run the FastAPI server**:
    Start the FastAPI server by running the following command:
    ```sh
    poetry run uvicorn backend.app.main:app --reload
    ```

## Frontend

Open the `frontend/index.html` file in your browser to view the application.