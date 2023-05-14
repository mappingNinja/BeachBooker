/* eslint-disable no-unused-expressions */

import PropTypes from 'prop-types';
import { Button, DialogContentText } from '@mui/material';
import React, { useCallback, createContext } from 'react';
import DefaultDialog from './Dialog';


export const ConfirmContext = createContext(null);

export const defaultProps = {
    title: 'Confirm',
    description: '',
    yesText: 'Yes',
    noText: 'No',
    dialogProps: {},
    yesButtonProps: {},
    noButtonProps: {},
};

const ConfirmDialog = ({
    noButtonProps,
    noText,
    yesButtonProps,
    yesText,
    description,
    resolveReject,
    onClose,
    ...dialogProps
}) => {
    const [resolve, reject] = resolveReject;

    const handleCancel = useCallback((e) => {
        reject();
        onClose && onClose();
    }, [reject, onClose]);

    const handleConfirm = useCallback((e) => {
        resolve();
        onClose && onClose();
    }, [resolve, onClose]);

    return (
        <DefaultDialog
            onClose={onClose}
            maxWidth="sm"
            actions={(
                <>
                    <Button
                        variant="contained"
                        color="secondary"
                        {...noButtonProps}

                        onClick={handleCancel}
                    >
                        {noText}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        {...yesButtonProps}
                        onClick={handleConfirm}
                    >
                        {yesText}
                    </Button>
                </>
            )}
            {...dialogProps}
        >
            {description && (
                <DialogContentText>{description}</DialogContentText>
            )}
        </DefaultDialog>
    );
};

export default ConfirmDialog;

ConfirmDialog.propTypes = {
    description: PropTypes.string,
    yesText: PropTypes.string,
    noText: PropTypes.string,
    yesButtonProps: PropTypes.any,
    noButtonProps: PropTypes.any,
    resolveReject: PropTypes.any,
};