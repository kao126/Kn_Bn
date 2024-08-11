import React, { InputHTMLAttributes, forwardRef } from 'react';

type FileProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: InputHTMLAttributes<HTMLInputElement>['id'];
};

export const File = forwardRef<HTMLInputElement, FileProps>(function File(
  { onChange, id },
  ref
) {
  return (
    <input
      ref={ref}
      id={id}
      name={id}
      type="file"
      accept="image/*"
      onChange={onChange}
      hidden
    />
  );
});
