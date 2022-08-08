import React from 'react';
import { ChildrenReturnType } from '@/types/types';
import { FormProvider, useForm } from 'react-hook-form';

interface DynamicFormProviderProps {
  children?: ChildrenReturnType;
}

const useDynamicRootForm = () => {
  const methods = useForm({ mode: 'onChange' });

  return { methods };
};

export const DynamicFormProvider = ({ children }: DynamicFormProviderProps) => {
  const { methods } = useDynamicRootForm();

  return <FormProvider {...methods}>{children}</FormProvider>;
};
