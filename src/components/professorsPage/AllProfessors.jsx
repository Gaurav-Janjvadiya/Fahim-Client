import React from "react";
import ProfessorInfo from "./ProfessorInfo";

function AllProfessors({ professors = []}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
      {professors.map((professor) => (
        <ProfessorInfo key={professor._id} professor={professor} />
      ))}
    </div>
  );
}

export default AllProfessors;
