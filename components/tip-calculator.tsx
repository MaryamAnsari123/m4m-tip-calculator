"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default export of the TipCalculatorComponent function
export default function TipCalculator() {
  // State hooks for managing the bill amount, tip percentage, tip amount, and total amount
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Handler for updating bill amount state on input change
  const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  // Handler for updating tip percentage state on input change
  const handleTipPercentageChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setTipPercentage(parseFloat(e.target.value));
  };

  // Function to calculate the tip and total amounts
  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100); // Calculate the tip amount
      setTipAmount(tip); // Set the tip amount state
      setTotalAmount(billAmount + tip); // Set the total amount state
    }
  };

  // JSX return statement rendering the tip calculator UI
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-500 dark:bg-gray-900">
      {/* Center the tip calculator card within the screen */}
      <Card className="w-full max-w-md p-4 bg-yellow-600 dark:bg-gray-200 shadow-lg rounded-lg">
        <CardHeader>
          {/* Header with title and description */}
          <CardTitle className="text-4xl text-sky-600 text-center bg-white">Tip Calculator</CardTitle>
          <CardDescription className="text-sm text-white text-center">
            Enter the bill amount and tip percentage to calculate the tip and
            total
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input for bill amount */}
          <div className="grid gap-2">
            <Label htmlFor="bill-amount" className="text-black font-bold">Bill Amount</Label>
            <Input
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount"
              value={billAmount !== null ? billAmount : ""}
              onChange={handleBillAmountChange}
            />
          </div>
          {/* Input for tip percentage */}
          <div className="grid gap-2">
            <Label htmlFor="tip-percentage" className="text-black font-bold">Tip Percentage</Label>
            <Input
              id="tip-percentage"
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={handleTipPercentageChange}
            />
          </div>
          {/* Button to calculate tip */}
          <Button onClick={calculateTip} className="bg-blue-500 hover:bg-green-300 text-black font-semibold w-full">Calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-1 mt-2 bg-blue-300 w-full">
          {/* Display the calculated tip amount */}
          <div className="flex items-center justify-between mt-5">
            <span className="font-mono">Tip Amount:</span>
            <span className="font-bold text-lime-800 text-xl">${tipAmount.toFixed(2)}</span>
          </div>
          {/* Display the calculated total amount */}
          <div className="flex items-center justify-between">
            <span className="font-mono">Total Amount:</span>
            <span className="font-bold text-blue-600 text-xl">${totalAmount.toFixed(2)}</span>
          </div>
        </CardFooter>
        <div>
            <p className="mt-3 ml-52 font-mono">Made by <b>MARYAM ANSARI</b></p>
          </div>
      </Card>
    </div>
  );
}