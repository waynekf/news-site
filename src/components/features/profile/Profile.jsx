import { useProfileContext } from "../../contexts/ProfileContext";

function Profile() {
  const { user } = useProfileContext();

  return (
    <>
    Logged in as: {user.name}
    </>
  );
}

export default Profile;
