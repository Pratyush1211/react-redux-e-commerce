import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router';
import { useMe } from '../reducers/me/hooks';
import { pages } from '../routes';

const Nav = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const { role } = useMe();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => push(newValue);
  return (
    <AppBar>
      <Tabs variant="scrollable" value={`/${pathname.split('/')[1]}` || '/'} onChange={handleChange}>
        {Object.keys(pages)
          .filter(k => pages[k].roles.includes(role) && !pages[k].noNav)
          .map(k => (
            <Tab key={k} value={k} label={pages[k].name} />
          ))}
      </Tabs>
    </AppBar>
  );
};

export default Nav;
