import React, { useState, useEffect } from 'react';
import { GridList, GridListTile, Dialog, IconButton, AppBar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const View = ({ filtered: { images, pagination }, classes }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = ({ isOpen, img = '' }) => () => {
    setIsOpen(isOpen);
    setDialogImage(img);
  };

  const [dialogImage, setDialogImage] = useState('');
  let cols = 0;
  return (
    <div>
      <GridList cellHeight={160} cols={2}>
        {images.slice(0, pagination).map(img => {
          cols++;
          return (
            <GridListTile
              key={img}
              cols={cols % 3 === 0 ? 2 : 1}
              onClick={toggleDrawer({ isOpen: true, img })}
              className={classes.item}>
              <img src={img} alt={`flower`}/>
            </GridListTile>
          );
        })}
      </GridList>
      <Dialog fullScreen open={isOpen} onClose={toggleDrawer({ isOpen: false })}>
        <AppBar color="primary" className={classes.header}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer({ isOpen: false })} aria-label="close"
            className={classes.closeBtn}>
            <CloseIcon className={classes.closeDialogIcon}/>
          </IconButton>
        </AppBar>
        <div className={classes.imageContainer}>
          <img className={classes.dialogImage} src={dialogImage} alt="big flower"/>
        </div>
      </Dialog>
    </div>
  );
};
