import React, {  } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const DefaultDialog= ({
    title,
    children,
    actions,
    onClose,
    ...dialogProps
}) => (
        <Dialog
            open
            maxWidth="md"
            onClose={onClose}
            {...dialogProps}
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {title}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            {actions && (
                <DialogActions >
                    {actions}
                </DialogActions>
            )}
        </Dialog>
    );

export default DefaultDialog;

DefaultDialog.propTypes = {
    title: PropTypes.any,
    actions: PropTypes.any,
    onClose: PropTypes.any    
};
