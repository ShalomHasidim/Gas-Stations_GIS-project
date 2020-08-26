import React from 'react'
import { slide as Menu } from "react-burger-menu";
import logo from '../assets/Logo.png'

const Sidebar = (props) => {
            const state = {...props};
            return  (
                // Pass on our props
                <Menu isOpen={state.isOpenMenu} onOpen={ ()=>state.setIsOpenMenu(true) } right>
                    <div className= "navbar-header">
                        <img src = {logo} alt = ""></img>
                    </div>
                    <div className = "seperator"/>
                    <div>
                        <button onClick = {handleShowModal} className="btn">
                            חיפוש תחנת דלק בקרבתי   
                        </button>
                        <i className="fas fa-street-view"/>
                    </div>
                    <div>
                        <button onClick = {handleShowModal} className="btn">
                            סינון תחנות דלק
                        </button>
                        <i className="fas fa-filter"/>
                    </div> 
                    <div className = "seperator"/>
                    <div>
                        <button onClick = {handleShowModal} className="btn">
                        הוספת תחנת דלק
                        </button>
                        <i className="fas fa-plus"/>
                    </div>
                    <div>
                        <button onClick = {handleShowModal} className="btn">
                        הסרת תחנת דלק
                        </button>
                        <i className="fas fa-trash-alt"/>
                    </div> 
                </Menu>
              );
              
              function handleShowModal() {
                state.setIsOpenMenu(false);
                state.setShow(true);
              }
}
 
export default Sidebar;
