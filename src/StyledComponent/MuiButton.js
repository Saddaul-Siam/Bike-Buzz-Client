import { styled } from "@mui/system";
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)({
    background: 'linear-gradient(#ff589b,#ff136f)',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '52px',
    border: 0,
    outline: 0,
});

export const DeleteButton = styled(Button)({
    background: 'linear-gradient(#DC143C,#DC143C)',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '52px',
    border: 0,
    outline: 0,
})
export const SuccessButton = styled(Button)({
    background: 'linear-gradient(#006400,#599a59)',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '52px',
    border: 0,
    outline: 0,
})

export default PrimaryButton;