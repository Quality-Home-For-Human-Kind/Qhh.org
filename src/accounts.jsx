import { Auth0Provider } from '@auth0/auth0-react'

function UserStatus() {
  const {
    isAuthenticated, 
    user, 
    isLoading,
    loginWithRedirect, 
    logout
  } = Auth0Provider();

  if(!isAuthenticated) {
    console.log("User is not logged in")
  }
}

export default UserStatus;
