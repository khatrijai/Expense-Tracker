import "./App.css";
import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpense } from "./Components/IncomeExpense";
import { Record } from "./Components/Record";
import { AddTransaction } from "./Components/AddTransaction";
import uuid from "react-uuid";

function App() {
  const [amountInput, checkAmountInput] = React.useState(true);

  const [formData, setForm] = React.useState({
    id: "",
    text: "",
    amount: "",
  });

  const [netAmount, setAmount] = React.useState({
    income: "",
    expense: "",
    net: "",
  });

  const [records, setRecords] = React.useState([]);

  React.useEffect(() => {
    setRecords(() => {
      return JSON.parse(localStorage.getItem("data")).length === 0
        ? []
        : JSON.parse(localStorage.getItem("data"));
    });
    console.log(records);
  }, []);

  React.useEffect(() => {
    let sumIncome = 0;
    let sumExpense = 0;

    for (let i = 0; i < records.length; i++) {
      if (records[i].amount[0] !== "-") {
        sumIncome = sumIncome + Number(records[i].amount);
      } else {
        sumExpense = sumExpense + Number(records[i].amount);
      }
    }

    setAmount(() => {
      return {
        income: `${parseFloat(sumIncome).toFixed(2)}`,
        expense: `${parseFloat(sumExpense * -1).toFixed(2)}`,
        net: `${parseFloat(sumIncome + sumExpense).toFixed(2)}`,
      };
    });
    localStorage.setItem("data", JSON.stringify(records));
  }, [records]);

  function updateForm(event) {
    checkAmountInput(true);
    setForm((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  }

  function updateRecord() {
    setRecords((prev) => {
      formData.id = uuid();
      return [...prev, formData];
    });
  }

  function checkInp() {
    var x = formData.amount;
    if (isNaN(x)) {
      return false;
    } else {
      return true;
    }
  }

  function submitForm(event) {
    event.preventDefault();
    if (checkInp()) {
      checkAmountInput(true);
      updateRecord();
      setForm(() => {
        return {
          id: "",
          text: "",
          amount: "",
        };
      });
    } else {
      checkAmountInput(false);
    }
  }

  function closed(id) {
    setRecords((prevRecords) => {
      let arr = [];

      for (let i = 0; i < prevRecords.length; i++) {
        if (prevRecords[i].id !== id) {
          arr.push(prevRecords[i]);
        }
      }

      return arr;
    });
  }

  return (
    <div className="main-container">
      <div className="upper-div">
      <Header />
      <Balance netAmount={netAmount} />
      <IncomeExpense netAmount={netAmount} />
      </div>
      <div className="lower-div">
      <Record records={records} close={closed} />
      <AddTransaction
        formData={formData}
        updateForm={updateForm}
        submitForm={submitForm}
        amountInput={amountInput}
      />
      </div>
     
    </div>
  );
}

export default App;
