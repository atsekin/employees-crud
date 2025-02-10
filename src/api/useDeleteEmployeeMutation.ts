import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from './apiClient';

export const deleteEmployee = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`);
};

export const useDeleteEmployeeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
}

