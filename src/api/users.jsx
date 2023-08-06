const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;

// Register a new user
const registerUser = async (input) => {
  const { userName, userPassword } = input;

  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${userName}`,
          password: `${userPassword}`,
        },
      }),
    });
    const result = await response.json();
    // As written below you can log your result
    // to check what data came back from the above code.
    console.log(`User Register result: ${result}`);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// User Login
const login = async (input) => {
  const { userName, userPassword } = input;

  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${userName}`,
        password: `${userPassword}`,
      }),
    });
    const result = await response.json();
    console.log(`User Login result: ${result}`);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// GET Me
// This route is used to grab an already logged in user's relevant data.
// It is mostly helpful for verifying the user has a valid token (and is thus logged in).
// You must pass a valid token with this request, or it will be rejected.
const getMe = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
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

// GET Routines by User
// This route returns a list of public routines for a particular user.
// If a token is sent in the Authorization header
// (and if this token's logged in user matches the user for which these routines are being requested),
// both public and private routines will be sent back for the requested user.
const getRoutinesByUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/albert/routines`, {
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
  registerUser,
  login,
  getMe,
  getRoutinesByUser,
};
