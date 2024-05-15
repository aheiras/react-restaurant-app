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
                <SidebarLink to="/">Appetizers</SidebarLink>
                <SidebarLink to="/">Entrees</SidebarLink>
                <SidebarLink to="/">Sides</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Beverages</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/">See Full Menu</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar