import API from "@/api";
import { ENDPOINTS } from "@/common/types";
import { useMutation } from "@tanstack/react-query";

export const useMutationRefill = () =>
  useMutation({
    mutationFn: () => {
      return API.post(ENDPOINTS.REFILL);
    },
  });
