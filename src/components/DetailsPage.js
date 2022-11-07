import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../store/space/thunks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectDetails } from "../store/space/selectors";

const DetailsPage = () => {
  const params = useParams();
  const details = useSelector(selectDetails);
  //F2 use params and fetcht the data that it shows on the console
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories(`${params.id}`));
  }, [dispatch, params.id]);

  //Sort over stories createdAt date
  //   const sortedStories = [...details.stories].sort(
  //     (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  //   );

  return (
    <div>
      {!details
        ? "Loading..."
        : details.stories.map((d) => (
            <div
              key={d.id}
              style={{
                backgroundColor: details.backgroundColor,
                color: details.color,
              }}
            >
              <h3>{d.name}</h3>
              <img
                style={{ width: 250, height: 200 }}
                src={d.imageUrl}
                alt={d.name}
              />
              <p>{d.content}</p>
            </div>
          ))}
    </div>
  );
};

export { DetailsPage };
