import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Form1 from "./forms/form1";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Form2 from "./forms/form2";
import Form3 from "./forms/form3";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "80px",
        }}
      >
        <Form1 />
        <Form2 />
        <Form3 />
      </Box>
    </ThemeProvider>
  );
}

export default App;
