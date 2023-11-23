import { styled } from "@mui/material/styles";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import MDDialogTitle from "./MDDialogTitle";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  const {
    children,
    open,
    title,
    saveTbtText,
    closeBtnText,
    onSave,
    onClose,
    onCloseFunc,
    size,
    loading,
    screenLoader,
    saveBtn = true,
    closeBtn = true,
    closeBtnColor = "light",
    deleteBtn = false,
    disabledBtn = false,
    isDisabled = false,
    overflowVisible,
    additionalBtnText,
    onAdditionalBtnSave,
    additionalBtnColor = "info",
    additionalBtn = false,
    titleClass = "",
    bodyClass = "",
  } = props;

  const checkOpen = () => {
    let openModal = false;
    if (open) {
      openModal = true;
    }
    return openModal;
  };

  return (
    <div>
      <BootstrapDialog
        aria-labelledby='customized-dialog-title'
        open={checkOpen()}
        maxWidth={size || "sm"}
        fullWidth
        className={overflowVisible || ""}
      >
        <MDDialogTitle onClose={onClose}>{title}</MDDialogTitle>
        <DialogContent
          dividers
          className={bodyClass || ""}
          sx={overflowVisible ? { overflow: "visible" } : {}}
        >
          {/* {screenLoader && <AppLoader />} */}
          {children}
        </DialogContent>
        <DialogActions sx={{ m: 2 }}>
          {closeBtn && (
            <Button
              onClick={onClose}
              variant='contained'
              color='primary'
              className='gray_bg_btn'
            >
              {closeBtnText || "Close"}
            </Button>
          )}
          {saveBtn && (
            <Button
              onClick={onSave}
              variant='contained'
              className='primary_bg_btn'
              disabled={loading}
              sx={{ minWidth: "140px" }}
            >
              {loading ? (
                // <SimpleLoader size={24} color={"secondary"} />
                <></>
              ) : (
                saveTbtText || "Save"
              )}
            </Button>
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
