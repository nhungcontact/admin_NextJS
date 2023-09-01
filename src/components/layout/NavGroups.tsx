/* eslint-disable @typescript-eslint/no-explicit-any */
// mui imports
import { ListSubheader, styled, Theme } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
type NavGroup = {
  navlabel?: boolean;
  subheader?: string;
};

interface ItemType {
  item: NavGroup;
  openDrawer: boolean;
}

const NavGroup = ({ item, openDrawer }: ItemType) => {
  const ListSubheaderStyle = styled((props: Theme | any) => <ListSubheader disableSticky {...props} />)(
    ({ theme }) => ({
      ...theme.typography.overline,
      fontWeight: '700',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      color: theme.palette.text.primary,
      lineHeight: '26px',
      padding: '3px 12px',
    }),
  );
  return (
    <>
      {!openDrawer && (
        <ListSubheaderStyle><MoreHoriz /></ListSubheaderStyle>
      )}
      {openDrawer && (
        <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>
      )}
    </>
    
  );
};
export default NavGroup;
