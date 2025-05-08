import { IErrorResponse } from "@/common/types";
import { toast } from "@/utils/toast";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useTranslation } from "react-i18next";

export function useNotifyMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  options?: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> {
  const { t } = useTranslation();
  return useMutation({
    ...options,
    onSuccess: (data, variables, context) => {
      const messageData = data as AxiosResponse<IErrorResponse>;
      const message = messageData?.data?.message || "successfully";
      toast.success(t(`errors.${message}`));
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      const err = error as AxiosError<IErrorResponse>;
      const message = err?.response?.data?.message || "somethingWentWrong";
      toast.error(t(`errors.${message}`));
      options?.onError?.(error, variables, context);
    },
  });
}
