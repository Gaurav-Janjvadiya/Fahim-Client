import { ReactFlow, ReactFlowProvider } from '@xyflow/react';
import { CustomNode } from './';
import '@xyflow/react/dist/style.css';
import { nodes, initialEdges } from '../data';
import { useMemo } from 'react';

const nodeTypes = {
  custom: CustomNode,
};

const CourseFlow = () => {
  const firstNodePosition = nodes[0]?.position || { x: 0, y: 0 };

  const memoizedNodes = useMemo(() => nodes, []);
  const memoizedEdges = useMemo(() => initialEdges, []);

  return (
    <div className='relative w-full h-screen sm:h-[calc(100vh-4rem)] overflow-hidden'>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={memoizedNodes}
          edges={memoizedEdges}
          defaultViewport={{
            x: firstNodePosition.x,
            y: firstNodePosition.y,
            zoom: 1.3,
          }}
          fitView
          fitViewOptions={{
            padding: 0.2,
          }}
          className='rounded-lg w-full h-full'
        />
      </ReactFlowProvider>
    </div>
  );
};

export default CourseFlow;
