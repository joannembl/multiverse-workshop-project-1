import './App.css';
import {TextField, Button, InputLabel, FormControl, MenuItem, Select} from "@mui/material/";

function App() {
  return (
    <div>
      <FormControl>
        <InputLabel id="type-select-label">Category</InputLabel>
        <Select
          labelId="type"
          id="type-select"
          label="Type"
          >
          <MenuItem value={1}>SUV</MenuItem>
          <MenuItem value={2}>Sedan</MenuItem>
          <MenuItem value={3}>Truck</MenuItem>
        </Select>
        <TextField label="Make" variant="outlined" />
        <TextField label="Model" variant="outlined" />
        <TextField label="Color" variant="outlined" />
        <Button variant="contained">Submit</Button>
      </FormControl>
    </div>
  );
}

export default App;
