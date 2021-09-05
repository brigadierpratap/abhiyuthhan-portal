import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import React from "react";

import "./nav.style.css";

const Nav = ({ currentUser, loading }) => {
  return (
    <nav>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <p
        className={`nojs-show ${
          !currentUser && loading ? `loading` : `loaded`
        }`}
      >
        {!currentUser && (
          <>
            <span className="notSignedIn">Not signed in</span>
              <button onClick={signInWithGoogle} className="signinButton">
                Sign in
              </button>
          </>
        )}
        {currentUser && (
          <>
            <span
              style={{ backgroundImage: `url(${currentUser.photoURL})` }}
              className="avatar"
            />
            <span className="signedIn">
              {" "}
              Signed in as <strong>{currentUser.displayName}</strong>
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                auth.signOut();
              }}
              className={"signoutButton"}
              onSelect={auth.signOut}
            >
              Sign out
            </button>
          </>
        )}
      </p>
    </nav>
  );
};

export default Nav;
