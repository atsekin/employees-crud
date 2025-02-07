import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Employee } from '../types/employees.ts';

// const API_URL = 'http://localhost:3001';
const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchEmployeeById = async (id: string): Promise<Employee> => {
  const { data } = await axios.get(`${API_URL}/users/${id}`);
  return data;
};

export const useEmployeeByIdQuery = (id: string) => useQuery<Employee>({
  queryKey: ['employee'],
  queryFn: () => fetchEmployeeById(id),
});
