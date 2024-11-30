import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfessorById } from "../api/professorApi";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { FaArrowLeft } from "react-icons/fa"; // Import the back arrow icon
import { Button } from "../components";
import { Rating } from "@mui/material";

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
    staleTime: 60000, // Data stays fresh for 1 minute
    cacheTime: 300000, // Cached for 5 minutes
    refetchOnWindowFocus: false,
  });
  // console.log(professor);
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
      <div className="min-h-screen max-h-fit sm:p-12 p-4  flex justify-center align-center">
        <div className="w-1/2 bg-[#1a1a1a] rounded-lg border border-[#333] p-4 flex shadow-lg ">
          <Link
            className="h-fit mx-4 font-bold text-lg transition duration-200 ease-in-out"
            to="/professors"
          >
            <Button style="rounded-full bg-[#1a1a1a] hover:text-[#0DFF15] w-14 h-14 flex items-center justify-center">
              <FaArrowLeft size={72} />
            </Button>
          </Link>

          <div className="bg-[#1a1a1a] w-full p-6 rounded-lg flex flex-col space-y-6 text-[#eee]">
            {/* Professor Info */}
            <div className="flex flex-col items-start space-y-4">
              <h3 className="text-[#0DFF15] text-2xl font-semibold">
                <span className="mr-2">{professor.title}</span>
                {professor.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {professor.department.name}
              </p>
            </div>

            {/* Comments Section */}
            <div className="w-full">
              <h4 className="text-lg font-medium text-[#0DFF15] mb-2">
                Comments:
              </h4>
              <div className="space-y-2">
                {professor.comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="bg-[#333] p-3 rounded-md shadow-md text-sm text-gray-300"
                  >
                    {comment.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Comment Box */}
            <div className="w-full">
              <textarea
                placeholder="Write a comment..."
                className="w-full bg-[#1a1a1a] text-[#eee] border border-[#444] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0DFF15]"
                rows="4"
              ></textarea>
              <button className="mt-3 bg-[#0DFF15] text-[#1a1a1a] py-2 px-4 rounded-md font-medium hover:bg-[#0bda0a] transition duration-200 ease-in-out">
                Submit Comment
              </button>
            </div>

            {/* Rating Box */}
            <div className="w-full">
              <h4 className="text-lg font-medium text-[#0DFF15] mb-2">Rate:</h4>
              <div className="flex items-center">
                <Rating
                  name="professor-rating"
                  size="large"
                  precision={0.5}
                  defaultValue={4}
                  onChange={(event, value) => console.log(`Rated: ${value}`)}
                  sx={{
                    "& .MuiRating-iconEmpty": { color: "#555" },
                    "& .MuiRating-iconFilled": { color: "#0DFF15" },
                    "& .MuiRating-iconHover": { color: "#0bda0a" },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Professor;
