// import MapNode from './components/MapNode'
import { useState, useCallback } from 'react'

import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, ReactFlowProvider, Background, Controls, type EdgeChange, type NodeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface NodeChangeType {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
  };
}
// const nodeTypes = { mapNode: MapNode, }

const initialNodes = [
  {
    id: '1',
    type: 'mapNode',
    position: { x: 200, y: 100 },
    data: {
      label: 'Node 1'
    },
  },
  {
    id: '2',
    type: 'mapNode',
    position: { x: 200, y: 300 },
    data: {
      label: 'Node 2'
    },
  },
]

const initialEdges: any[] = [];

function App() {

  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  // const onConnect = useCallback( (params: any) => setEdges((eds) => addEdge(params, eds)), [] );
  const onNodesChange = useCallback(
    (changes: NodeChange<NodeChangeType>[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange<any>[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
    (params: any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const addNode = () => {
    const id = (nodes.length + 1).toString();
    setNodes(
      (nds) =>
        [
          ...nds,
          {
            id,
            type: 'mapNode',
            position: {
              x: Math.random() * 400,
              y: Math.random() * 400,
            },
            data: {
              label: `Node ${id}`
            },
          },
        ]
    );
  };
  return (
    <>
      {/* <button className="btn btn-primary m-4" onClick={addNode}> Add node </button> 
      <div className="w-full h-screen style={{ background: 'red' }}"> 
      <ReactFlow
nodes={nodes} edges={edges} onConnect={onConnect} nodeTypes={nodeTypes} nodesDraggable={true} panOnDragMode="free"
>
  <Background />
  <Controls />
</ReactFlow> */}


      {/* </div> */}
     <div
     style={{
      width: '100vw',
      height: '10vh',
      background: 'darkblue'
     }}
     ></div>
    
        <div style={{ width: '100vw', height: '90vh' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          />
        </div>
    </>
  )
}

export default App
