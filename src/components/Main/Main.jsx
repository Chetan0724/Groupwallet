function Main() {
  return (
      <div
        id="Main"
        className="bg-[#201E43] text-white flex flex-col justify-around items-center gap-10 grow"
      >
        <div className="text-center">
        <h2 className="text-2xl mb-2 md:text-5xl">Welcome! to Groupwallet</h2>
        <p className="md:text-2xl">Planning a Group Trip? We&apos;ve Got Your Finances Covered</p>
        </div>
        <p className="text-center w-4/5 md:text-2xl">
          Embark on stress-free group adventures <span className="text-yellow-300">GroupWallet</span>, your go-to
          platform for effortless trip budgeting expense management. We
          understand that organizing a group trip can be exciting yet
          challenging, especially when it comes to handling finances. Our
          mission is to make your travel planning experience smoother and more
          enjoyable.
        </p>
        <div className="flex flex-col gap-10 justify-around items-center text-black md:flex md:flex-row">
          <div className="bg-white rounded-lg p-5 text-center w-9/12 md:w-1/4">
            <h3 className="text-lg font-bold italic font-sans text-[#201E43] mb-1 underline decoration-solid decoration-1 underline-offset-2 md:text-2xl">Seamless Expense Tracking</h3>
            <p className="font-light md:text-xl">
              Keep track of every penny spent during your trip with our
              intuitive expense tracking feature. Easily log expenses, split
              bills, and view a real-time summary of your group&apos;s spending.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center w-9/12 md:w-1/4">
            <h3 className="text-lg font-bold italic font-sans text-[#201E43] mb-1 underline decoration-solid decoration-1 underline-offset-2 md:text-2xl">Fair Bill Splitting</h3>
            <p className="font-light md:text-xl">
              No more headaches when it comes to splitting bills. Our
              intelligent algorithm ensures fair distribution of expenses,
              taking into account shared costs and individual contributions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center w-9/12 md:w-1/4">
            <h3 className="text-lg font-bold italic font-sans text-[#201E43] mb-1 underline decoration-solid decoration-1 underline-offset-2 md:text-2xl">Real-Time Updates</h3>
            <p className="font-light md:text-xl">
              Stay informed with real-time updates on your group&apos;s spending.
              Receive notifications, view detailed breakdowns, and make informed
              decisions to keep your budget on track
            </p>
          </div>
        </div>
      </div>
  );
}

export default Main;
