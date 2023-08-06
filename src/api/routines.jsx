const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;

// GET Routines
// This route returns a list of all public routines
export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// POST new Routine
// A request to this endpoint will attempt to create a new routine.
// You must pass a valid token with this request, or it will be rejected.
const newRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      body: JSON.stringify({
        name: "Long Cardio Routine",
        goal: "To get your heart pumping!",
        isPublic: true,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// UPDATE Routine
// Update a routine, notably change public/private, the name, or the goal.
// A token needs to be sent in the header in order for this request to be successful.
const updateRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      body: JSON.stringify({
        name: "Long Cardio Day",
        goal: "To get your heart pumping!",
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// DELETE Routine
// Hard delete a routine. Make sure to delete all the routineActivities whose routine is the one being deleted.
const deleteRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// POST Activity to Routine
// Attaches a single activity to a routine.
// Prevents duplication on (routineId, activityId) pair. This route does NOT require a token to be sent in the headers.
const addActivityToRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activityId: 7,
        count: 1,
        duration: 20,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// export default {
//   getRoutines,
//   newRoutine,
//   updateRoutine,
//   deleteRoutine,
//   addActivityToRoutine,
// };
