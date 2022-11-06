import { fetchSpaces } from "../store/space/thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectSpaces } from "../store/space/selectors";
import { useEffect } from "react";

const Spaces = () => {
  //F1 step3: create the dispatch in order to show the data on the console
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  //F1 step6: make a selector and import it to display the data
  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      {!spaces
        ? "Loading..."
        : spaces.map((s) => (
            <div
              key={s.id}
              style={{ color: s.color, backgroundColor: s.backgroundColor }}
            >
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
    </div>
  );
};

export default Spaces;
