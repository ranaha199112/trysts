import { useState } from "react";
import LoginForm from "./LoginForm";
import Security from "./Security";

function Login({ adminId, posterId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal && (
        <LoginForm
          setShowModal={setShowModal}
          adminId={adminId}
          posterId={posterId}
        />
      )}
      {showModal && <Security setShowModal={setShowModal} />}
    </>
  );
}

export default Login;
