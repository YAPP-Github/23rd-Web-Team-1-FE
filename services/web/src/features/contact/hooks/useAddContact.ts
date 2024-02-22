import { ContactPayload } from '@/types/contact';
import useContact from '@app/my/contact/hooks/useContact';
import { kyClient } from '@linker/ky';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postAddContact = (payload: ContactPayload) => {
  const response = kyClient.post('/v1/contacts', {
    json: payload,
  });

  return response;
};

const useAddContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ContactPayload) => postAddContact(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: useContact.getKey() });
    },
  });
};

export default useAddContact;
