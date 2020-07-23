import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: ${({width}) => width? width : '100%'}
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const Textarea = styled.textarea``;

const Errors = styled.span``;

const InputBox = ({
  error,
  showTextOnError,
  isDisabled,
  textarea,
  invisible,
  customInputIcon,
  label,
  labelClasses = '',
  ...props
}) => {
  return (
    <InputContainer>
      {label && <label className={labelClasses}>{label}</label>}
      {!textarea ? (
        <Input {...props} disabled={isDisabled} />
      ) : (
        <Textarea {...props} disabled={isDisabled} />
      )}
      {error && showTextOnError && <Errors>{error}</Errors>}
    </InputContainer>
  );
};

InputBox.defaultProps = {
  type: 'text',
  value: '',
  textarea: false,
  showTextOnError: true,
  invisible: false
};

export default InputBox;
