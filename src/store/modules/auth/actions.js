// Sign In
export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

// Sign Up
export function signUpRequest(name, email, password) {
  console.tron.log(' signUpRequest', name, email, password);
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

//
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
