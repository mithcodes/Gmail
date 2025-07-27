 import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [forgotPassword, setForgotPassword] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (errMsg) {
      const timer = setTimeout(() => setErrMsg(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [errMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if (!isSignIn && enteredPassword !== confirmPassword.current.value) {
      setErrMsg("Passwords do not match!");
      return;
    }

    const URL = isSignIn
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPrX1oo7-EphkQf67K_Hx-jX9BAOr8an0"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPrX1oo7-EphkQf67K_Hx-jX9BAOr8an0";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (isSignIn) {
          dispatch(login({ tokenID: data.idToken, userID: enteredEmail }));
          navigate("/home");
        } else {
          setIsSignIn(true);
          setErrMsg("Signup successful! Please login.");
        }
      } else {
        setErrMsg(data.error.message || "Something went wrong");
      }
    } catch (error) {
      setErrMsg("Error: " + error.message);
    }
  };

  const handleForgotPassword = async () => {
    const enterEmail = email.current.value;
    if (!enterEmail) {
      setErrMsg("Please enter your email first");
      return;
    }

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDPrX1oo7-EphkQf67K_Hx-jX9BAOr8an0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: enterEmail,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setErrMsg("Reset link sent to your email");
      } else {
        setErrMsg("Failed to send reset link");
      }
    } catch (error) {
      setErrMsg(error.message);
    }
    setForgotPassword(false);
    setErrMsg("your forgot password link has sent to your mail just check")
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-[#050414] relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="flex items-center justify-center min-h-screen relative z-10">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] md:w-2/6 bg-[#0d081f] bg-opacity-30 p-6 space-y-5 text-center rounded-md shadow-lg outline-1"
          >
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png"
              alt="logo"
              className="w-40 mx-auto"
            />

            {forgotPassword ? (
              <>
                <input
                  ref={email}
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-1 text-white text-xl"
                  required
                />
                <button
                  type="button"
                  onClick={handleForgotPassword}

                  className="w-full p-3 text-lg rounded-md bg-blue-700 hover:bg-blue-950 text-white font-semibold"
                >
                  Send Reset Link
                </button>
              </>
            ) : (
              <>
                <p className="text-2xl font-semibold text-white">
                  {isSignIn ? "Login" : "Sign Up"}
                </p>

                {errMsg && (
                  <p className="text-orange-500 font-semibold">{errMsg}</p>
                )}

                <input
                  ref={email}
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-1 text-white text-xl"
                  required
                />
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 p-1  text-white text-xl"
                  required
                />
                {!isSignIn && (
                  <input
                    ref={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 p-1  text-white text-xl"
                    required
                  />
                )}

                <button
                  type="submit"
                  className="w-full p-3 text-lg rounded-md bg-blue-700 hover:bg-blue-950 text-white font-semibold"
                >
                  {isSignIn ? "Login" : "Sign Up"}
                </button>

                <p
                  onClick={() => setForgotPassword(true)}
                  className="font-semibold text-blue-400 cursor-pointer hover:underline"
                >
                  Forgot password?
                </p>

                <p className="font-semibold text-white">
                  {isSignIn ? "New user?" : "Already registered?"}{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(!isSignIn)}
                    className="text-blue-500 hover:underline"
                  >
                    {isSignIn ? "Sign up" : "Login"}
                  </button>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

