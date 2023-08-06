const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;

// GET the Activities
// Returns a list of all activities in the database
export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
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

// POST new Activities
// A request to this endpoint will attempt to create a new activity.
// You must pass a valid token with this request, or it will be rejected.
const newActivity = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Running",
        description: "Keep on running!",
      }),
    });

    const result = await response.json();

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// UPDATE existing Activity (by Activity ID)
// Anyone can update an activity (yes, this could lead to long term problems)
const updateActivity = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN_STRING_HERE}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        name: "Running",
        description: "Keep on running, til you drop!",
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// GET activities (by IsPublic and feature a given Activity)
// This route returns a list of public routines which feature that activity
const getPublicActivityByActivity = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities/3/routines`, {
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
};

// export default {
//   getActivities,
//   newActivity,
//   updateActivity,
//   getPublicActivityByActivity,
// };
