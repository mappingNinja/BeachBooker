import PropTypes from 'prop-types';
import { Button, DialogActions, DialogContent, DialogTitle, Dialog, Stack } from '@mui/material';


function DeleteDialog({
    onClose,
    handleClickDelete,
    title = "Suppression",
    message = "Merci de sélectionnez une seule zone ou objet avant de spécifier son identifiant."
}) {
    return (
        <Dialog maxWidth="sm" open={true}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {message}
            </DialogContent>
            <DialogActions>
                <Stack direction="row" spacing={3} justifyContent={"flex-end"}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleClickDelete} variant="contained">Ok</Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteDialog;

DeleteDialog.propTypes = {
    onClose: PropTypes.func,
    handleClickDelete: PropTypes.func,
    title: PropTypes.string,
    message: PropTypes.string,
};
