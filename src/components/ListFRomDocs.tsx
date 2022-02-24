import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ListFRomDocs = () => {
  return (
    <CustomList>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{text}</ListItemIcon>
          <ListItemText />
        </ListItem>
      ))}
    </CustomList>
  );
};

const CustomList = styled(List)({
  margin: '80px',
});

export default ListFRomDocs;
