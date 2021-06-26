import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PencilIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const FormDialog = ({ todo, emitNewTodo }) => {
  const [open, setOpen] = useState(false);

  const [editValue, setEditValue] = useState(todo.title);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    emitNewTodo(editValue);
    setOpen(false);
  };

  const handleInput = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <div>
      <IconButton aria-label='delete' onClick={handleClickOpen}>
        <PencilIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogTitle id='form-dialog-title'>Todo editing!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Re-enter your new todo below'
            type='text'
            fullWidth
            value={editValue}
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleEdit} color='primary'>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
