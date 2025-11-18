import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { isAuthenticated, isLoading, error, user, loginWithRedirect } =
    useAuth0();
  const buttonStyle =
    "flex flex-row gap-3 py-[22px] px-[14px] bg-accent2 text-white font-bold text-sm rounded-full hover:opacity-90 transition-opacity";

  if (isLoading) {
    return (
      <button type="button" className={buttonStyle}>
        Please Wait
      </button>
    );
  }

  if (error) {
    return (
      <button type="button" className={buttonStyle}>
        Error
      </button>
    );
  }

  if (isAuthenticated) {
    if (user) {
      return (
        <button type="button" className={buttonStyle}>
          <img src={user.picture} className="size-5" />
          <a>{user.name}</a>
        </button>
      );
    } else {
      return (
        <button type="button" className={buttonStyle}>
          <a>'Profile'</a>
        </button>
      );
    }
  } else {
    return (
      <button
        type="button"
        className={buttonStyle}
        onClick={() => loginWithRedirect()}
      >
        <a>Login / Signup</a>
      </button>
    );
  }
}

export default Profile;
