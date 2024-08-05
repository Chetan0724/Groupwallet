function Main() {
  return (
      <div
        id="Main"
        className="bg-[#201E43] text-white flex flex-col justify-around items-center gap-10 grow"
      >
        <div className="text-center">
        <h2 className="text-2xl">Welcome! to Groupwallet</h2>
        <p>Planning a Group Trip? We&apos;ve Got Your Finances Covered</p>
        </div>
        <p className="text-center w-1/2">
          Embark on stress-free group adventures GroupWallet, your go-to
          platform for effortless trip budgeting expense management. We
          understand that organizing a group trip can be exciting yet
          challenging, especially when it comes to handling finances. Our
          mission is to make your travel planning experience smoother and more
          enjoyable.
        </p>
        <div className="flex flex-row gap-10 justify-around text-black sm:flex sm:flex-col sm:items-center">
          <div className="bg-white rounded-lg p-5 sm:basis-40 sm:w-1/2">
            <h3 className="text-xl font-bold italic font-sans">Seamless Expense Tracking</h3>
            <p>
              Keep track of every penny spent during your trip with our
              intuitive expense tracking feature. Easily log expenses, split
              bills, and view a real-time summary of your group&apos;s spending.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 sm:basis-40 sm:w-1/2">
            <h3>Fair and Transparent Bill Splitting</h3>
            <p>
              No more headaches when it comes to splitting bills. Our
              intelligent algorithm ensures fair distribution of expenses,
              taking into account shared costs and individual contributions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-5 sm:basis-40 sm:w-1/2">
            <h3>Real-Time Updates</h3>
            <p>
              Stay informed with real-time updates on your group's spending.
              Receive notifications, view detailed breakdowns, and make informed
              decisions to keep your budget on track
            </p>
          </div>
        </div>
      </div>
  );
}

export default Main;
