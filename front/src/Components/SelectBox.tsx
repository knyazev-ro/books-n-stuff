import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectBox({
  value,
  setValue,
  options,
  label,
}: {
  value: any;
  setValue: any;
  options: any;
  label: string;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          className="bg-books-green"
          onChange={handleChange}
        >
          {options?.map(
            (item: {
              value: string | number | readonly string[] | undefined;
              label:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
