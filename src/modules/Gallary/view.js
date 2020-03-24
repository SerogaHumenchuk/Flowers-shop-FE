import React, {useState} from 'react';
import { GridList, GridListTile, Dialog, IconButton, AppBar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const View = ({ filtered, classes }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState('')

  const toggleDrawer = ({isOpen, img = ''}) => {
    setIsOpen(isOpen)
    setDialogImage(img)
  }

  let cols = 0;
  return (
    <>
    <GridList cellHeight={160} className={classes.gridList} cols={2}>
      {filtered.map(img => {
        cols++;
        return (
          <GridListTile key={img} cols={cols % 3 === 0 ? 2 : 1} onClick={() => toggleDrawer({isOpen: true, img})}>
            <img src={img} alt={`flower`} />
          </GridListTile>
        );
      })}
    </GridList>
    <Dialog fullScreen open={isOpen} onClose={() => toggleDrawer({isOpen: false})}>
    <AppBar color="primary" className={classes.header}>
        <IconButton edge="start" color="inherit" onClick={() => toggleDrawer({isOpen: false})} aria-label="close" className={classes.closeBtn}>
          <CloseIcon className={classes.closeDialogIcon}/>
        </IconButton>
      </AppBar>
      <div className={classes.dialogContent} style={{ backgroundImage: `url(${dialogImage})`}} > 

      </div>
  </Dialog>
  </>
  );
};
