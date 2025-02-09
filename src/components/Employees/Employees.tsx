import { useState } from 'react';
import { Stack } from '@mui/material';

import { useEmployeesQuery } from '../../api/useEmployeesQuery';
import { AddEmployeeModal } from '../AddEmployeeModal/AddEmployeeModal';

import EmployeesGrid from '../EmployeesGrid/EmployeesGrid';
import { TopPanel } from '../TopPanel';

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
    <Stack spacing={2}>
      <TopPanel
        handleCreate={() => setIsModalOpen(true)}
        handleFilter={setSelectedStatus}
        handleSearch={setSearchTerm}
      />
      <EmployeesGrid cards={filteredCards} />
      <AddEmployeeModal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </Stack>
  );
}