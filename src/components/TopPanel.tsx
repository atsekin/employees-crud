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

import { statuses } from './Employees/constants';
import { EmployeeStatus } from '../types/employees';
import { PlusIcon } from './icons/PlusIcon';
import { SearchIcon } from './icons/SearchIcon';

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
        endIcon={<PlusIcon />}
        sx={{
          textTransform: 'none',
          width: '160px',
          fontWeight: 600,
          fontSize: '16px',
          backgroundColor: '#109CF1',
        }}
      >
        Create
      </Button>
      <Stack direction="row" spacing={2} width="100%" sx={{ backgroundColor: '#fff' }}>
        <TextField
          placeholder="Type to search"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
          fullWidth
          sx={{
            marginBottom: 0,
            '& .MuiOutlinedInput-root fieldset': { border: 'none' },
          }}
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
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem sx={{
            height: '24px',
            alignSelf: 'center',
            color: '#DEDEDE'
          }}
        />
        <FormControl sx={{ marginBottom: 0, minWidth: 200 }} variant="outlined">
          <InputLabel
            sx={{
              color: '#6A707E',
              '&.MuiFormLabel-filled, &.Mui-focused.MuiInputLabel-formControl': {
                display: 'none',
              },
            }}
          >Filter by status</InputLabel>
          <Select
            onChange={(e) => handleFilter(e.target.value as EmployeeStatus)}
            sx={{
              '&.MuiOutlinedInput-root fieldset': { border: 'none' },
            }}
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