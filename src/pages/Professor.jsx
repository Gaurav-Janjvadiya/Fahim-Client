import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfessorById } from "../api/professorApi";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Button as MyButton } from "../components";
import { CommentBox, AllComments, RateProfessor } from "../components";

function Professor() {
  const { professorId } = useParams();
  const {
    data: professor,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["professorById", professorId],
    queryFn: () => getProfessorById(professorId),
    staleTime: 60000,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
  });

  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  if (isError)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Alert severity="error">Error: {error.message}</Alert>
      </div>
    );
  return (
    <>
      <div className="relative min-h-screen max-h-fit py-2 sm:px-12 px-4 flex justify-center items-center">
        <Link
          className="absolute top-0 left-0 m-4 border rounded-full p-2 sm:p-4 text-lg flex items-center justify-center hover:bg-[#1A1A1A] transition duration-200 ease-in-out"
          to="/professors"
        >
          <ArrowBackRoundedIcon size={30} />
        </Link>
        <div className="bg-[#1A1A1A] max-h-fit w-full sm:w-10/12 md:w-8/12 lg:w-6/12 rounded-lg border border-[#333] p-4 flex flex-col shadow-lg">
          <div className="px-4 sm:px-6 py-8 sm:py-12 rounded-lg flex flex-col space-y-6 text-[#eee]">
            {/* Professor Info */}
            <div className="flex flex-col items-start space-y-1">
              <h3 className="text-[#0DFF15] text-xl sm:text-2xl font-semibold">
                <span className="mr-2">{professor.title}</span>
                {professor.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {professor.department.name}
              </p>
            </div>

            {/* Comments Section */}
            <AllComments professorId={professor._id} />
            {/* Comment Box */}
            <CommentBox professorId={professor._id} />

            {/* Rating Box */}
            <RateProfessor professorId={professor._id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Professor;
