import { ReactFlow, ReactFlowProvider } from "@xyflow/react";
import { CustomNode } from "./";
import "@xyflow/react/dist/style.css";
import { nodes, initialEdges } from "../data";

const nodeTypes = {
  custom: CustomNode,
};

const CourseFlow = () => {
  const firstNodePosition = nodes[0]?.position || [0, 0];

  return (
    <>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={initialEdges}
          defaultposition={[firstNodePosition.x, firstNodePosition.y]}
          className="rounded-lg h-full w-full"
        />
      </ReactFlowProvider>
    </>
  );
};

export default CourseFlow;
