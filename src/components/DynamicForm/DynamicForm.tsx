import { BasicAny } from '@/types/types';
import { UIComponents } from '@/utils/components';
import React, { FC, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { List } from '../List';

export interface DynamicFormProps {
  children: ReactElement[];
}

const DynamicForm: FC<DynamicFormProps> = ({ children }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const formatValidationRules = (rule: Record<string, BasicAny>) => {
    if (rule.pattern) {
      rule.pattern = {
        value: new RegExp(rule.pattern.value),
        message: rule.pattern.message,
      };
    }
    return rule;
  };

  return (
    <form>
      <List display="flex" direction="column" spaceBetween="24px">
        {children.map(({ props }: BasicAny, index) => {
          const validationRules = formatValidationRules(props.validationRules);
          const inputRegister = register(props.name, validationRules);
          const config = {
            ...props,
            key: index,
            register: inputRegister,
            error: !!errors[props.name],
            icon: !!errors[props.name],
            helperText: errors[props.name]?.message,
          };
          return React.createElement(UIComponents[props.component], config);
        })}
      </List>
    </form>
  );
};

export default DynamicForm;
