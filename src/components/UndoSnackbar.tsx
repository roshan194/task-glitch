import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      message="Task deleted"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={(_, reason) => {
        if (reason === 'clickaway') return;
        onClose(); // ✅ clears lastDeleted
      }}
      action={
        <Button
          color="secondary"
          size="small"
          onClick={() => {
            onUndo();   // restore task
            onClose();  // ✅ immediately clear lastDeleted
          }}
        >
          Undo
        </Button>
      }
    />
  );
}
