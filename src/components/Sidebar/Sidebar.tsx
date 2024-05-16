import { FC } from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute} from './SidebarElements'

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
  }
  
const Sidebar: FC<SidebarProps> = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/menu/1/Appetizers">Appetizers</SidebarLink>
                <SidebarLink to="/menu/2/Entrees">Entrees</SidebarLink>
                <SidebarLink to="/menu/3/Sides">Sides</SidebarLink>
                <SidebarLink to="/menu/4/Desserts">Desserts</SidebarLink>
                <SidebarLink to="/menu/5/Beverages">Beverages</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/menu/categories">See Full Menu</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar