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
        <TextField label="Make" />
        <TextField label="Model" />
        <TextField label="Year" />
        <TextField label="Color" />
        <TextField label="Image URL" />
        <TextField label="Drivetrain" />
        <TextField label="MPG" />
        <TextField label="Fuel-Type" />
        <TextField label="Transmission" />
        <TextField label="Engine"/>
        <TextField label="Features" multiline rows={6}
        maxRows={4}/>
        <Button variant="contained">Submit</Button>
      </FormControl>
    </div>
  );
}

export default App;
