import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateSelector() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Select Date"
          className="bg-[#E8E8E8] bg-opacity-50 hover:bg-opacity-80 duration-300 w-[300px] sm:w-[400px]"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
