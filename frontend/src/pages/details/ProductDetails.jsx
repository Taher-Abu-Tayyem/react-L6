import "./ProductDetails.css";
import { useGetOneProductNameQuery } from "../../Redux/productApi";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
export default function ProductDetails() {
  let {id} = useParams();
  const parsedId = Number(id); // Convert the id to an integer
  //data =>one product
  const { data, isLoading, error } = useGetOneProductNameQuery(parsedId);
   console.log("param id=",id,"parsed id=",parsedId);
  console.log("product data=",data) 
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" color="error">
          Error
        </Typography>
      </Box>
    );
  }

/*   if (!data) return null;
 */  if (data) {
    return <div>data.id:{data.id}</div>;
  }
}