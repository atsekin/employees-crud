import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { useEmployeesQuery } from '../../api/useEmployeesQuery';
import { AddEmployeeModal } from '../AddEmployeeModal/AddEmployeeModal';

import { statuses } from './constants';
import EmployeesGrid from '../EmployeesGrid/EmployeesGrid.tsx';

export const Employees = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: cards } = useEmployeesQuery();

  const filteredCards = (cards ?? []).filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStatus ? card.status === selectedStatus : true)
  ) ?? [];

  return (
    <Box sx={{ margin: "auto", padding: 2 }}>
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>Create</Button>
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

      <EmployeesGrid cards={filteredCards} />

      {/*{filteredCards.map((card) => (*/}
      {/*  <Card key={card.id} sx={{ marginBottom: 2 }}>*/}
      {/*    <CardContent>*/}
      {/*      <Typography variant="h6">{card.name}</Typography>*/}
      {/*      <Typography color="text.secondary">*/}
      {/*        Status: {card.status}*/}
      {/*      </Typography>*/}
      {/*    </CardContent>*/}
      {/*  </Card>*/}
      {/*))}*/}
      <AddEmployeeModal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </Box>
  );
}