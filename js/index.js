console.log("ya estamos en el script")

const API_URL = "http://localhost:8080/login";
const button = document.querySelector("#iniciar-sesion")
const emailElement = document.querySelector("#email")
const passwordElement = document.querySelector("#password")

button.addEventListener("click", async (event) => {
  event.preventDefault()
  console.log("Estamos haciendo click")

  const email = emailElement.value
  const password = passwordElement.value
  console.log("email", email)
  console.log("password", password)
  // data que le mandare al backend al iniciar sesion
  const dataForBackend = {
    email,
    password
  }

  const data = await fetch(API_URL, {
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataForBackend)
  })

  const response = await data.json()
  const token = response.token
  console.log("token", token)

  localStorage.setItem("token", token)
  window.location.href = "/profile"
  // const token = response
})