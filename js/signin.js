export const Signin = (data, setToken, main) => {
  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzsxsI6PrblFmHvFDTCRNnckkl-DO_LBA",
    {
      method: "post",
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("Success:", response);
      localStorage.setItem("token", response.idToken);
      setToken("ok");
      main();
    })
    .catch((error) => {
      console.error("Error:", error);
      setToken("signin");
    });
};
