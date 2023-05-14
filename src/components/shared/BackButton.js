import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';


export default function BackButton() {
    const navigate = useNavigate();

    return (
        <Button
            startIcon={<KeyboardBackspaceIcon />}
            variant="outlined"
            onClick={() => navigate(-1)}
        >
            Retournez à la page précédente
        </Button>
    );
}


