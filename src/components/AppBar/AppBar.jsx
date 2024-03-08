// import { AppBar as MuiAppBar, Toolbar, Box } from "@mui/material";
// import { Navigation } from "../Navigation/Navigation";
// import { UserMenu } from "../UserMenu/UserMenu";
// import { AuthNav } from "../AuthNav/AuthNav";
// import { useAuth } from "../../hooks";

// export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <MuiAppBar position="static">
//       <Toolbar>
//         <Navigation />
//         <Box flexGrow={1} />
//         {isLoggedIn ? <UserMenu /> : <AuthNav />}
//       </Toolbar>
//     </MuiAppBar>
//   );
// };
//============
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
