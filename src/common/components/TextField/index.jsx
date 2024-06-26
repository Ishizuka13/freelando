import styled from "@emotion/styled";

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.spacements.xs};
  margin-bottom: ${({ theme }) => theme.spacements.s};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.neutrals.a};
  border-radius: ${({ theme }) => theme.spacements.s};
  height: 40px;
  font-size: 14px;
  line-height: 17px;
`;

export const TextField = ({ label, value, onChange }) => {
  return (
    <StyledLabel onChange={(e) => onChange(e.target.value)}>
      {label}
      <StyledInput value={value} />
    </StyledLabel>
  );
};
