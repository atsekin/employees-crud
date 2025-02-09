import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import { statuses } from './Employees/constants';
import { EmployeeStatus } from '../types/employees';

type TopPanelProps = {
  handleCreate: () => void;
  handleFilter: (status: EmployeeStatus) => void;
  handleSearch: (searchTerm: string) => void;
}

export const TopPanel = ({
  handleCreate,
  handleFilter,
  handleSearch,
}: TopPanelProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={handleCreate}
        endIcon={<AddIcon />}
      >
        Create
      </Button>
      <Stack direction="row" spacing={2} width="100%" sx={{ backgroundColor: '#fff' }}>
        <TextField
          placeholder="Type to search"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
          fullWidth
          sx={{ marginBottom: 0 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Divider orientation="vertical" />
        <FormControl sx={{ marginBottom: 0, minWidth: 200 }}>
          <InputLabel>Filter by status</InputLabel>
          <Select
            onChange={(e) => handleFilter(e.target.value as EmployeeStatus)}
            label="Filter by status"
          >
            <MenuItem value="">All</MenuItem>
            {statuses.map(({ label, value }) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}