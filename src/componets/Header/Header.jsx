import React from "react"
import './styles.css';
import { ReactComponent as Logo } from './logo/canal.svg'
import { ReactComponent as Out } from './logo/Group.svg'

function Header() {
    return (
        <>
            <div className="header">
                <Logo className="logo"/>
                <Out className="out"/>
            </div>
        </>
    )
}

export {Header}