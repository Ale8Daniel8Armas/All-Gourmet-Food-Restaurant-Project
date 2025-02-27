import { userCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = userCreateMyUser();

  const hasCreateUser = useRef(false);
  useEffect(() => {
    if(user?.sub && user?.email && !hasCreateUser.current) {
        createUser({auth0Id: user.sub, email: user.email});
        hasCreateUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Cargando...</>
}

export default AuthCallbackPage