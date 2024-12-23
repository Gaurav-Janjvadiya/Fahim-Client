import { CourseFlow, Button } from "../components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import {
  addCourses,
  removeCourses,
  getEligibleCourses,
  recommendTopCombinations,
} from "../api/authApi";
import { CircularProgress } from "@mui/material";

const ManageCourses = () => {
  const { courses } = useSelector((state) => state.courses);
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: addCourses,
    onSuccess: () => {
      console.log("done");
    },
    onError: () => {
      console.log("error");
    },
  });
  const removeMutation = useMutation({
    mutationFn: removeCourses,
    onSuccess: () => {
      console.log("done");
    },
    onError: () => {
      console.log("error");
    },
  });
  const { data } = useQuery({
    queryKey: ["course"],
    queryFn: getEligibleCourses, // Pass the function reference here, not the result of the function
  });

  useEffect(() => {
    console.log(data && data[0]);
  }, [data]);

  return (
    <>
      <div className="p-6 min-h-screen w-full">
        <div className="flex items-start justify-center h-full w-full p-4 sm:flex-row flex-col sm:space-y-0 space-y-4 sm:space-x-4 space-x-0 rounded-xl border border-[#444]">
          <div className="relative border border-[#444] w-full sm:w-4/5 rounded-lg p-4 shadow-lg h-screen">
            <CourseFlow />
          </div>
          <div className="flex items-center justify-center flex-col rounded-xl border border-[#444] h-fit w-full sm:w-[20vw] space-y-4 p-4">
            {addMutation.isLoading && removeMutation.isLoading ? (
              <CircularProgress />
            ) : (
              <>
                <Button
                  onClick={() => {
                    addMutation.mutate(courses);
                  }}
                  style={"px-8 w-full"}
                >
                  Add
                </Button>
                <Button
                  onClick={() => {
                    removeMutation.mutate(courses);
                  }}
                  style={"px-8 w-full"}
                >
                  Remove
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default ManageCourses;
