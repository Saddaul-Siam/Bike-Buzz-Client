import { Redirect, Route, useHistory, useRouteMatch } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { CircularProgress } from '@mui/material';
import { Box } from "@mui/system";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();

  let { path, url } = useRouteMatch();
  console.log(path,url);
  // console.log(location?.state?.from );
  const history = useHistory();
  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `${url}`,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;