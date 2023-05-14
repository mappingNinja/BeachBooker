/* eslint-disable react/prop-types */
import { defaultsDeep } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState, useCallback, createContext, useEffect } from 'react';
import ConfirmDialog, {
    ConfirmContext,
    defaultProps as confirmDefaultProps
} from './ConfirmDialog';


export const DialogsContext = createContext(null);

const defaultProps = {
    dialogProps: {},
    confirmDefaultProps,
}

const buildConfirmOptions = (defaultOptions, options) => {

    const dialogProps = defaultsDeep(
        options.dialogProps,
        defaultOptions.dialogProps,
        defaultProps.confirmDefaultProps.dialogProps,
        defaultProps.dialogProps,
    );

    const confirmDefaultProps = defaultsDeep(options, defaultOptions, defaultProps.confirmDefaultProps);

    return {
        ...confirmDefaultProps,
        dialogProps,
    }
};

const DialogsProvider= ({
    children,
    confirmDialogProps
}) => {
    const [confirmDialogOptions, setConfirmDialogOptions] = useState(defaultProps.confirmDefaultProps);
    const [resolveReject, setResolveReject] = useState([]);

    const contextValue = useCallback((options) => new Promise((resolve, reject) => {
            if (typeof options === 'string') {
                options = { description: options };
            }
            setConfirmDialogOptions(buildConfirmOptions(confirmDialogProps, options));
            setResolveReject([resolve, reject]);
        }), [setConfirmDialogOptions, confirmDialogProps, setResolveReject]);

    const handleClose = useCallback(() => {
        setResolveReject([]);
    }, []);

    useEffect(()=>{
        console.log(resolveReject, 'resolveReject');
    }, [resolveReject]);

    return (
        <>
            <ConfirmContext.Provider value={contextValue}>
                {children}
            </ConfirmContext.Provider>

            <ConfirmDialog
                open={resolveReject.length == 2}
                onClose={handleClose}
                resolveReject={resolveReject}
                {...confirmDialogOptions}
            />
        </>
    );
};

export default DialogsProvider;

DialogsProvider.propTypes = {
    dialogProps: PropTypes.any,
    confirmDialogProps: PropTypes.any       
};