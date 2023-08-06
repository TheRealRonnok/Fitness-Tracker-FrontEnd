const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;

// UPDATE count/duration on Routine-Activity
// Update the count or duration on the routine activity.
// A token needs to be sent in the header in order for this request to be successful.
const updateRoutineActivity = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/11`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      body: JSON.stringify({
        count: 2,
        duration: 30,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// DELETE Activity from a Routine
// Remove an activity from a routine (hard deleting routine_activity), dissociating an activity from a routine.
// A token needs to be sent in the header in order for this request to be successful.
const deleteActivityFromRoutine = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/11`, {
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

export default {
  updateRoutineActivity,
  deleteActivityFromRoutine,
};
