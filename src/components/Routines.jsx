import { useState, useEffect } from "react";
import { getRoutines } from "../api/routines.jsx";

function writeOneRoutine(input) {
  return (
    <>
      {/* Routine ID */}
      {input.id ? <h2>Routine Id: {input.id}</h2> : <h2>ID not found</h2>}
      {/* Creator ID */}
      {input.creatorId ? (
        <h2>Routine Id: {input.creatorId}</h2>
      ) : (
        <h2>CreatorId not found</h2>
      )}
      {/* isPublic */}
      {input.isPublic ? (
        <h2>isPublic: {input.isPublic}</h2>
      ) : (
        <h2>isPublic not found</h2>
      )}
      {/* name */}
      {input.name ? <h2>Name: {input.name}</h2> : <h2>Name not found</h2>}
      {/* goal */}
      {input.goal ? <h2>Goal: {input.goal}</h2> : <h2>Goal not found</h2>}
      {/* creatorName */}
      {input.creatorName ? (
        <h2>Creator Name: {input.creatorName}</h2>
      ) : (
        <h2>Creator Name not found</h2>
      )}
    </>
  );
}

function Routines() {
  const [routines, setRoutines] = useState([]);
  const [forceRender, setForceRender] = useState(false);

  const getAPIRoutines = async () => {
    let result = await getRoutines();
    setRoutines(result);
  };

  useEffect(() => {
    getAPIRoutines();
    setForceRender(false);
  }, [forceRender]);

  return (
    <section className="postResults">
      <div id="centerHeader">
        {routines.length < 2 ? (
          <h2>{routines.length} ROUTINE</h2>
        ) : (
          <h2>{routines.length} ROUTINES</h2>
        )}
      </div>
      {routines.map((item, idx) => (
        <div key={idx} className="oneMsg">
          {writeOneRoutine(item)}
        </div>
      ))}
    </section>
  );
}

export default Routines;
