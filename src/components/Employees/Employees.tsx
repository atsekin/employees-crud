import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

import { useEmployeesQuery } from '../../api/useEmployeesQuery';
import { MenuOption } from '../../types/common';
import { EmployeeStatus } from '../../types/employees';

const statuses: MenuOption[] = [
  { label: 'Working', value: EmployeeStatus.WORKING, },
  { label: 'On Vacation', value: EmployeeStatus.ON_VACATION, },
  { label: 'Lunch Time', value: EmployeeStatus.LUNCH_TIME, },
  { label: 'Business Trip', value: EmployeeStatus.BUSINESS_TRIP, },
];

export const Employees = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const { data: cards } = useEmployeesQuery();

  const filteredCards = (cards ?? []).filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStatus ? card.status === selectedStatus : true)
  ) ?? [];

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <TextField
        fullWidth
        label="Type to search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Filter by status</InputLabel>
        <Select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          label="Filter by status"
        >
          <MenuItem value="">All</MenuItem>
          {statuses.map(({ label, value }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {filteredCards.map((card) => (
        <Card key={card.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{card.name}</Typography>
            <Typography color="text.secondary">
              Status: {card.status}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}