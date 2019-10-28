import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 20px;
`;

export const Label = styled.label`
  margin-bottom: 20px;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;

  &.has-thumbnail h3,
  &.has-thumbnail svg {
    display: none;
  }

  h3 {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  font-size: 18px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin-bottom: 10px;
  border: 0;
  border-radius: 4px;
`;
