import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const index = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography> Your Session is Over, Please login again</Typography>

      <Link href={"/adminutility/signin"} style={{ textDecoration: "none" }}>
        <Typography
          color="rgb(255, 149, 24)"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              textDecorationColor: "rgb(255, 149, 24)",
            },
          }}
        >
          Click here to Login again
        </Typography>
      </Link>
    </Container>
  );
};

export default index;
