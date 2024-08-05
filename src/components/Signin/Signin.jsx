function Signin() {
  return (
    <>
      <div
        id="signin"
        className="h-3/5 bg-[#201E43] flex justify-center items-center grow"
      >
        <form
          action=""
          method="get"
          className="flex flex-col gap-1.5 font-sans bg-white px-16 py-16 rounded-lg text-lg shadow-2xl"
        >
          <h2 className="text-2xl font-semibold pb-6 text-center">
            Welcome Back!
          </h2>

          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your mail address"
            name=""
            id="email"
            required
            className="bg-gray-100 border border-gray-400 rounded-md text-black py-0.5 px-2 w-72"
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name=""
            required
            id="password"
            className="bg-gray-100 border border-gray-400 rounded-md text-black py-0.5 px-2 w-72"
          />
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="pl-2">
              Remember me
            </label>
          </div>
          <button
            onClick={() => {
              console.log("hey");
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              console.log(email);
              console.log(password);
              if (
                email === "ydvchetan01@gmail.com" &&
                password === "12345678"
              ) {
                console.log("Login");
              }
            }}
            type="submit"
            className="bg-[#201E43] text-white rounded-md hover:ring-2 py-1 shadow-2xl"
          >
            Log In
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
