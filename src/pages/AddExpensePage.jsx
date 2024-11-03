import React, { useState } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

const AddExpensePage = () => {
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [expense, setExpense] = usePersistedState("expense", {
    electricity: 0,
    fertilizer: 0,
    other: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");
    const expAmt = parseFloat(amount);
    if (expAmt <= 0) {
      setErrorMessage("Enter amount greater than zero.");
      return;
    }

    setExpense((prevExp) => ({
      ...prevExp,
      [expenseType]: prevExp[expenseType] + expAmt,
    }));

    setExpenseType("")
    setAmount("")
  };

  return (
    <div className="flex w-full h-full items-center">
      <div className="bg-white w-full p-5 rounded-md shadow-md">
        <div className="text-center text-lg font-semibold text-gray-500">
          Add Expenses
        </div>
        <hr className="border-gray-300 border-t-2 mt-2" />
        <form onSubmit={handleSubmit} className="mt-7 mb-3 px-5">
          <div className="mb-4">
            <select
              id="expenseType"
              value={expenseType}
              onChange={(e) => setExpenseType(e.target.value)}
              className="block w-full border border-gray-300 focus:border-green-600 focus:outline-none rounded-md p-2"
              required
            >
              <option value="" disabled>
                Select an expense type
              </option>
              <option value="electricity">Electricity</option>
              <option value="fertilizer">Fertilizer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-green-600"
              placeholder="Enter amount"
              required
            />
            {errorMessage && (
              <div className="text-red-500 text-sm mb-2 mt-1 px-1">
                {errorMessage}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-md mt-2 hover:bg-green-700"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpensePage;
