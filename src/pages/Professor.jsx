import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfessorById } from "../api/professorApi";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import { FaArrowLeft } from "react-icons/fa"; // Import the back arrow icon
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
      <div className="min-h-screen max-h-fit sm:p-12 p-2 flex justify-center align-center">
        <div className="w-1/2 bg-[#1a1a1a] max-h-fit rounded-lg border border-[#333] p-4 flex shadow-lg ">
          <Link
            className="h-fit rounded-lg mr-4 font-bold text-lg transition duration-200 ease-in-out"
            to="/professors"
          >
            <MyButton style="rounded-full bg-[#1a1a1a] hover:bg-[#1a1a1a] hover:border-[#333] hover:border w-14 h-14 flex items-center justify-center">
              <FaArrowLeft size={72} />
            </MyButton>
          </Link>

          <div className="bg-[#1a1a1a] w-full px-6 py-12 rounded-lg flex flex-col space-y-6 text-[#eee]">
            {/* Professor Info */}
            <div className="flex flex-col items-start space-y-1">
              <h3 className="text-[#0DFF15] text-2xl font-semibold">
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
