import { Stack, Button } from '@mui/material';


export default function ActionMoreMenu({ onClickDelete, onClickEdit, row }) {    
    return (
        <>
            <Stack key={row.id} direction={'row'} spacing={1} justifyContent="center">
                <Button size="small" variant="outlined" onClick={() => onClickEdit(row)}>
                    Edit
                </Button>
                <Button size="small" variant="outlined" onClick={() => onClickDelete(row.id)}>
                    Delete
                </Button>
            </Stack>
        </>
    );
}
