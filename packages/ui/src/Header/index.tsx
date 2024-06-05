import React, { ReactElement } from 'react'
import './styles.scss'

interface IHeaderComponent {

  /**
 * @param {string} navText - Nav Text
 *
 */
  navText: string;

  /**
* @param {ReactElement} icon - Icon Component
*
*/
  icon?: ReactElement;

/**
* @param {void} onClickIcon - On Click Icon Function
*
*/
onClickIcon?: () => void;


}
export function HeaderComponent({ navText, icon, onClickIcon }: IHeaderComponent) {
  const HeaderIcon = icon
  return (
    <nav className="main-nav">
        {HeaderIcon && (
          <div className="button-icon" onClick={onClickIcon}>
            {HeaderIcon}
          </div>
        )}
        <div className="nav-text">
          <p>{navText}</p>
        </div>
    </nav>
  )
}