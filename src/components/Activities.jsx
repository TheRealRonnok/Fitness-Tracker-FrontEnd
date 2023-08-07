import { useState, useEffect } from "react";
import { getActivities } from "../api/activities.jsx";

// Display items of activity [Helper Function]
function writeOneActivity(input) {
  return (
    <>
      {input.name ? (
        <h2>ACTIVITY NAME: {input.name}</h2>
      ) : (
        <h2>Activity name not found</h2>
      )}
      {input.description ? (
        <h4>DESCRIPTION: {input.description}</h4>
      ) : (
        <h4>Activity description not found</h4>
      )}
      {input.id ? <h4>ID: {input.id}</h4> : <h4>Activity ID not found</h4>}
    </>
  );
}

function Activities() {
  const [activities, setActivities] = useState([]);
  const [forceRender, setForceRender] = useState(false);

  const getAPIActivities = async () => {
    let result = await getActivities();
    setActivities(result);
  };

  useEffect(() => {
    getAPIActivities();
    setForceRender(false);
  }, [forceRender]);

  return (
    <section>
      <div>
        {activities.length < 2 ? (
          <h2>{activities.length} ACTIVITY</h2>
        ) : (
          <h2>{activities.length} ACTIVITIES</h2>
        )}
      </div>
      {activities.map((item, idx) => (
        <div key={idx}>{writeOneActivity(item)}</div>
      ))}
    </section>
  );
}

export default Activities;
