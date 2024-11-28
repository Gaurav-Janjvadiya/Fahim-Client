import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfessorById } from "../api/professorApi";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { Button } from "../components";

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
  console.log(professor);
  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    );
  if (isError) return <Alert severity="error">Error: {error.message}</Alert>;
  return (
    <div className="space-y-2 flex flex-col">
      <Button style={"w-[100px]"}>
        <Link className="w-full h-full" to={"/professors"}>Back</Link>
      </Button>
      <p>
        <span className="mr-1">{professor.title}</span> {professor.name}
      </p>
      <p>{professor.department.name}</p>
      <p>{professor.department.credits}</p>
      <p> {professor.avgRating}</p>
      {professor.ratings.map((rating) => (
        <div key={rating._id}>
          <p>rating.ratings</p>
        </div>
      ))}
      {/* {professor.name} */}
      {professor.comments.map((comment = []) => (
        <p key={comment._id}>comment</p>
      ))}
    </div>
  );
}

export default Professor;
