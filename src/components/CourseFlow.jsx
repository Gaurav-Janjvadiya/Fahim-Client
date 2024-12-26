import { ReactFlow, ReactFlowProvider } from "@xyflow/react";
import { CustomNode } from "./";
import "@xyflow/react/dist/style.css";
import { nodes, initialEdges } from "../data";

const nodeTypes = {
  custom: CustomNode,
};

const CourseFlow = () => {
  const firstNodePosition = nodes[0]?.position || { x: 0, y: 0 };

  return (
    <div className="relative w-full h-screen sm:h-[calc(100vh-4rem)] overflow-hidden">
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={initialEdges}
          defaultViewport={{
            x: firstNodePosition.x,
            y: firstNodePosition.y,
            zoom: 1,
          }}
          fitView
          fitViewOptions={{
            padding: 0.2,
          }}
          className="rounded-lg w-full h-full"
        />
      </ReactFlowProvider>
    </div>
  );
};

export default CourseFlow;
