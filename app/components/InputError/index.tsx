import { FieldError } from 'react-hook-form';

type InputErrorProps = {
  fieldName: string;
  error?: FieldError;
};

const InputError = ({ fieldName }: InputErrorProps) => {
  return (
    <>
      <p className="text-red-600 font-normal text-xs">
        {fieldName} is required
      </p>
    </>
  );
};

export default InputError;
