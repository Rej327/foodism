import { MenuItem, TextField } from "@mui/material";
import DateSelector from "./DateSelector";
export default function Form() {
  const number = [
    {
      value: "Number of Guests",
      label: "Number of Guests",
    },
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
    {
      value: "More than 5",
      label: "More than 5",
    },
  ];

  const time = [
    {
      value: "Select Time",
      label: "Select Time",
    },
    {
      value: "Lunch",
      label: "Lunch",
    },
    {
      value: "Dinner",
      label: "Dinner",
    },
  ];
  return (
    <div className="w-auto flex flex-col item center justify-center mb-28">
      <div className="text-center m-auto mb-10">
        <p className="font-body text-base font-medium tracking-wider">
          TUESDAY - SUNDAY :{" "}
          <span className="text-[#FF6B5D] font-extrabold text-xl">
            01PM - 09PM
          </span>
        </p>
      </div>
      <div className="max-w-[500px] lg:max-w-[900px] m-auto flex flex-wrap gap-5 items-center justify-center">
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          color="primary"
          name="name"
          className="w-[300px] sm:w-[400px]"
        />
        <TextField
          id="filled-basic"
          label="Email Address"
          variant="filled"
          color="primary"
          name="email"
          className="w-[300px] sm:w-[400px]"
        />
        <TextField
          id="filled-basic"
          label="Contact Number"
          variant="filled"
          color="primary"
          name="number"
          className="w-[300px] sm:w-[400px]"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Number of Guests"
          className="bg-[#E8E8E8] bg-opacity-50 hover:bg-opacity-80 duration-300 w-[300px] sm:w-[400px]"
        >
          {number.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <DateSelector />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Select Time"
          className="bg-[#E8E8E8] bg-opacity-50 hover:bg-opacity-80 duration-300 w-[300px] sm:w-[400px]"
        >
          {time.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <button className="button-48 mt-5" role="button">
          <span className="font-head tracking-widest px-5 border-none">
            SUBMIT
          </span>
        </button>
      </div>
    </div>
  );
}
