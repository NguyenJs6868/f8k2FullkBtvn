"use client"
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 500, y: 500 }, data: { label: 'An' } },
  { id: '2', position: { x: 500, y: 600 }, data: { label: 'Nguyen' } },
  { id: '3', position: { x: 500, y: 700 }, data: { label: 'Name' } },
  { id: '4', position: { x: 500, y: 800 }, data: { label: 'Name2' } },
];
const initialEdges = [
  { id: 'e1-2-3', source: '1', target: '2', target: '3',  target: '4' },
];

function MindmapComponent() {

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );


	return (
		<div style={{ width: '98vw', height: '98vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
	)
}

export default MindmapComponent