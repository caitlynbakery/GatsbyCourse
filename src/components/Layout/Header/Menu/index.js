import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import { MenuWrapper, MenuItem } from './style';

const Menu = () => {
    const result = useStaticQuery(graphql`
    fragment menuItemData on ContentfulMenuItem {
      id
      label
      page {
        slug
      }
    }
    
    query MenuQuery {
      contentfulMenu {
        menuItems {
       ...menuItemData
          subMenuItems {
            ...menuItemData
          }
        }
      }
    }
    `);
return  (<MenuWrapper>
{result.contentfulMenu.menuItems.map((menuItem) => (
    <MenuItem key={menuItem.id}>
        {menuItem.subMenuItems ?
      <div>{menuItem.label}</div> : <div>
      {menuItem.subMenuItems?.map(
        (subMenuItem) => (
        <div key={subMenuItem.id}>{subMenuItem.label}</div>
      )
        
      )}</div>}
    </MenuItem>
  )
)}
</MenuWrapper>);
};

export default Menu;