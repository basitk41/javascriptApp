import { Signup } from "./signup.js";
import { Signin } from "./signin.js";
import { CheckAuth } from "./checkAuth.js";
import { form } from "./form.js";
import { SIGNIN, AUTH } from "./constant.js";
let token = SIGNIN;

function main() {
  CheckAuth(setToken);
  const root = document.getElementById("root");
  if (token === SIGNIN) {
    const formData = form();
    root.innerHTML = formData;
    setToken(null);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const signin_btn = document.getElementById("log1");
    const signup_btn = document.getElementById("log2");
    signup_btn.onclick = () => {
      const data = { email, password };
      Signup(data, setToken, main);
    };
    signin_btn.onclick = () => {
      const data = { email, password };
      Signin(data, setToken, main);
    };
  }
  if (token === AUTH) {
    root.innerHTML = "Welcome to dashboard";
  }
}
function setToken(text) {
  token = text;
}
main();
