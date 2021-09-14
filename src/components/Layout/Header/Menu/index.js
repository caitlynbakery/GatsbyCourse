import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
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
        {!menuItem.subMenuItems  // ternary operator, like an if statement
        ?
          <Link to={`/${menuItem.page.slug}`}>{menuItem.label}</Link> 
        : 
          <SubMenuItemWrapper>
            <div>
              {menuItem.label}
            </div>
            <div>
          {menuItem.subMenuItems?.map(
            (subMenuItem) => (
             <div key={subMenuItem.id}><Link>{subMenuItem.label}</Link></div>)
          )}</div>
          </SubMenuItemWrapper>}
    </MenuItem>
  )
)}
</MenuWrapper>);
};

export default Menu;