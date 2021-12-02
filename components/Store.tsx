import { useState } from "react";
import CustomListBox from "./CustomListBox";

export default function Store({ values }) {
  const [Amounts, setAmounts] = useState(
    Object.fromEntries(values.map((value) => [value, 0]))
  );

  const [selected, setSelected] = useState(values[0]);

    const handleChange = (flag : boolean) => {
        if(flag){
            setAmounts((prev) => ({
                ...prev,
                [selected]: prev[selected] + 1,
            }));
        }else{
            setAmounts((prev) => ({
                ...prev,
                [selected]: prev[selected] > 0 ? prev[selected] - 1 : prev[selected],
            }));
        }
    }
        
  return (
    <>
      <CustomListBox values = {values} type = "crypto" selected = {selected} onChange = {setSelected}></CustomListBox>
      <div>{Amounts[selected]}</div>
      <button onClick = {()=>handleChange(true)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span> Add</span>
      </button>
      <button onClick = {()=>handleChange(false)} className="mx-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span> Subtract</span>
      </button>
    </>
  );
}
