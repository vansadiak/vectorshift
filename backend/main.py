from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from networkx import DiGraph, is_directed_acyclic_graph
from pydantic import BaseModel

import json

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class Pipeline(BaseModel):
    nodes: list
    edges: list

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Pipeline):
    try:
        # Create a directed graph
        G = DiGraph()
        
        # Add nodes and edges to the graph
        for node in pipeline.nodes:
            G.add_node(node['id'])
        
        for edge in pipeline.edges:
            G.add_edge(edge['source'], edge['target'])
        
        # Calculate the number of nodes and edges
        num_nodes = G.number_of_nodes()
        num_edges = G.number_of_edges()
        
        # Check if the graph is a DAG
        is_dag = is_directed_acyclic_graph(G)

      
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': is_dag
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
