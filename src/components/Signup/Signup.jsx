function Signup() {
  return (
    <>
      <div
        id="signup"
        className="h-3/5 bg-[#201E43] flex justify-center items-center grow"
      >
        <form
          action=""
          method="get"
          className="flex flex-col gap-1.5 font-sans bg-white px-5 py-8 rounded-lg text-lg shadow-2xl md:px-10"
        >
          <h2 className="text-2xl font-semibold pb-2 text-center">
            Create an account
          </h2>

          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            name=""
            id="Username"
            className="bg-gray-100 border border-gray-400 rounded-md text-black py-0.5 px-2 w-72"
          />

          <label htmlFor="">Your email</label>
          <input
            type="email"
            placeholder="Enter your mail address"
            required
            name=""
            id="userEmail"
            className="bg-gray-100 border border-gray-400 rounded-md text-black py-0.5 px-2 w-72"
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            required
            name=""
            id="password"
            className="bg-gray-100 border border-gray-400 rounded-md text-black py-0.5 px-2 w-72"
          />

          <label htmlFor="">Confirm password</label>
          <input
            type="password"
            placeholder="Enter password"
            required
            name=""
            id="confPassword"
            className="bg-gray-100 border border-gray-400 rounded-md text-black py-0.5 px-2 w-72"
          />

          <p id="warnpara" className="text-red-500"></p>

          <label htmlFor="">Date of Birth</label>
          <input
            type="date"
            name=""
            required
            id="dateofBirth"
            className="bg-gray-100 border border-gray-400 rounded-md text-black py-0.5 px-2 w-72"
          />

          <fieldset>
            <legend>Gender</legend>
            <div className="flex flex-row justify-between">
              <span>
                <label htmlFor="" className="mr-2">
                  Male
                </label>
                <input type="radio" name="gender" value="Male" required />
              </span>

              <span>
                <label htmlFor="" className="mr-2">
                  Female
                </label>
                <input type="radio" name="gender" value="Female" required />
              </span>

              <span>
                <label htmlFor="" className="mr-2">
                  Other
                </label>
                <input type="radio" name="gender" value="Other" required />
              </span>
            </div>
          </fieldset>

          <button
            type="submit"
            className="bg-[#201E43] text-white rounded-md hover:ring-2 py-1 shadow-2xl"
          >
            Create an account
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
