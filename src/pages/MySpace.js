import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

const MySpace = () => {
  const profile = useSelector(selectUser);

  console.log(profile, "this is the user with space");
  return (
    <div>
      {!profile ? (
        "Loading..."
      ) : (
        <div>
          <h3>{profile.mySpace.title}</h3>
          <p>{profile.mySpace.stories}</p>
        </div>
      )}
    </div>
  );
};

export { MySpace };
