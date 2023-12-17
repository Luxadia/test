import React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const Page = () => {
  const { inputValue } = useParams();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Displaying Input Value:
      </Typography>
      <Typography variant="body1">{inputValue}</Typography>
    </div>
  );
};

export default Page;
