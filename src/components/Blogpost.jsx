import { useAuth0 } from "@auth0/auth0-react";

function Blogpost() {
  const { isAuthenticated, isLoading, error, user, loginWithRedirect } =
    useAuth0();
}

export default Blogpost;
