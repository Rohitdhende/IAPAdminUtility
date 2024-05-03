"use client";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  return (
    <main>
      <Typography>Hello World</Typography>
    </main>
  );
}
