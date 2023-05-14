import { useContext } from "react";
import { ConfirmContext } from "./ConfirmDialog";

export * from "./ConfirmDialog";

export const useConfirm = () => {
    const confirm = useContext(ConfirmContext);
    return confirm;
};
