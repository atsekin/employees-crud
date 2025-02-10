import { InputAdornment, MenuItem, Stack } from '@mui/material';

import { statuses } from '../Employees/constants';
import { EmployeeStatus } from '../../types/employees';
import { PlusIcon } from '../icons/PlusIcon';
import { SearchIcon } from '../icons/SearchIcon';

import { StyledCreateButton, StyledStack, StyledTextField, StyledDivider, StyledSelectControl, StyledSelectLabel, StyledSelect } from './styled';

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
      <StyledCreateButton
        variant="contained"
        onClick={handleCreate}
        endIcon={<PlusIcon />}
      >
        Create
      </StyledCreateButton>
      <StyledStack direction="row" spacing={2}>
        <StyledTextField
          placeholder="Type to search"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
          fullWidth
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
        <StyledDivider
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <StyledSelectControl variant="outlined">
          <StyledSelectLabel>Filter by status</StyledSelectLabel>
          <StyledSelect
            onChange={(e) => handleFilter(e.target.value as EmployeeStatus)}
          >
            <MenuItem value="">All</MenuItem>
            {statuses.map(({ label, value }) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
          </StyledSelect>
        </StyledSelectControl>
      </StyledStack>
    </Stack>
  );
}