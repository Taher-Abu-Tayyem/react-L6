import "./ProductDetails.css";
import { useGetOneProductNameQuery } from "../../Redux/productApi";
import { useParams } from "react-router-dom";
import { Box, Button,Badge, CircularProgress, IconButton, Stack, styled, Typography } from "@mui/material";
import { useRef, useState } from "react";
import DetailsThumb from "./DetailsThumb";
import { Add, Remove } from "@mui/icons-material";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../Redux/cartSlice";
import { decreaseQuantity, increaseQuantity } from "../../Redux/cartSlice";


export default function ProductDetails() {

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
  },
}));


  const productQuantity = (itemAPI) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === itemAPI.id
    }
    )
    return myProduct.quantity 
  }

  const dispatch = useDispatch();
  const {selectedProducts, selectedProductsID} = useSelector((state) => state.cartt)
  
  let { id } = useParams();
  const parsedId = Number(id); // Convert the id to an integer
  const [index, setIndex] = useState(0);
const myRef=useRef(null);
const handleTab = (index) => {
  setIndex(index);
  const images =myRef.current.children;
  for (let i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace("active", "");
  }
  images[index].className = "active";
  
}


  //data =>one product
  const { data, isLoading, error } = useGetOneProductNameQuery(parsedId);
  console.log("param id=", id, "parsed id=", parsedId);
  console.log("product data=", data);
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

  //  if (!data) return null;
    if (data) {
    return (
      <div className="app details-page">
        <div className="details" >
          <div className="big-img">
            <img src={data.imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.productName}</h2>
              <span>${data.price}</span>
            </div>
            {/* <Colors colors={data.colors} /> */}

            <p>{data.description}</p>

           <DetailsThumb
              images={data.imageLink}
              tab={handleTab}
              myRef={myRef}
            /> 

            {selectedProductsID.includes(data.id)? (<div dir="rtl" style={{ display: "flex", alignItem: "center" }}>
                      <IconButton color="primary" sx={{ ml: "10px" }} 
                      onClick={() => {dispatch(increaseQuantity(data))}}>
                        <Add fontSize="small"/>
                      </IconButton>
            
                      <StyledBadge badgeContent={productQuantity(data)} color="primary" />
            
                      <IconButton color="primary" sx={{mr: "10px" }} 
                      onClick={() => {dispatch(decreaseQuantity(data))}}>
                        <Remove fontSize="small"/>
                      </IconButton>
                    </div>
            ) : (    <Button
                            sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              dispatch(addProduct(data))
                            }
                            }
                          >
                          Add to cart
                            
                       </Button>)}
                      
                            
          </div>
        </div>
      </div>  
    );
  }
}
