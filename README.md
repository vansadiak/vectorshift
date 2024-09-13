# Pipeline Builder

This project is a visual pipeline builder with a React frontend and a FastAPI backend. It allows users to create, visualize, and analyze data processing pipelines using a drag-and-drop interface.

## Features

- Drag-and-drop interface for building pipelines
- Multiple node types including Input, Output, LLM, Text, Math, Image, Conditional, Database, and API
- Real-time pipeline validation
- Dark mode support
- Responsive design

## Technologies Used

- Frontend:
  - React
  - React Flow for node-based UI
  - Tailwind CSS for styling
  - Zustand for state management
- Backend:
  - FastAPI
  - NetworkX for graph analysis

## Setup Instructions

### Dependencies

- Node.js (version 18.20)
- Python 3
- pip3

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Run the following command to install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the `backend` directory.
2. Install the required Python packages:
   ```bash
   pip3 install -r requirements.txt
   ```
3. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

## Usage

1. Open your browser and go to `http://localhost:3000` to access the frontend.
2. Use the Pipeline Toolbar to drag and drop nodes onto the canvas.
3. Connect nodes by dragging from one node's output handle to another node's input handle.
4. Configure node settings as needed.
5. Click the "Submit Pipeline" button to analyze the pipeline.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
