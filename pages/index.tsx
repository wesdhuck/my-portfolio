import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { positions } from "@mui/system";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Styling From MUI00aa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [
  { title: "big", desc: "beeeeeeeeeeeeeeeeeeeeean" },
  { title: "ben", desc: "please stop" },
  { title: "ben", desc: "ok sir" },
];

const theme = createTheme();
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Album() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        style={{
          background:
            "linear-gradient(270deg, #A4E9F9ff, #AADFF8ff, #AFD5F7ff, #B5CCF6ff, #BAC2F4ff, #C0B8F3ff, #C5AEF2ff)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              fontWeight: "bold",
              textShadow: " 1px 1px 2px black",
            }}
          >
            👋 Wesley's Portfolio
          </Typography>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              style={{
                fontWeight: "bold",
              }}
              gutterBottom
            >
              Welcome To My Portfolio 👀
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              style={{
                fontWeight: "bold",
              }}
              paragraph
            >
              Data Driven Marketer | Data Analysis | Aspiring Developer.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              I've been working withing the marketing tech realm for 5+ years
              has lead me to grow a particular set of skills that range from
              growth hacking paid advertisement to reporting using google
              cloud's Big Query and developing my webapps.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://static.wikia.nocookie.net/3a58140e-7ff3-47ff-97ea-ffb2e8cd0332/scale-to-width/755"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          End Of Page 😭
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thanks for visiting my portfolio 🙏
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
