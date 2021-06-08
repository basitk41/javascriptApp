import { Signup } from "./signup.js";
import { form } from "./form.js";
const type = "signin";

function main() {
  if (type === "signin") {
    const root = document.getElementById("root");
    const formData = form();
    root.innerHTML = formData;
  }
}
main();
