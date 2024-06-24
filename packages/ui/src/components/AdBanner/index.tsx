import React, { ReactElement } from "react";
import "./styles.scss";

interface IAddBannerComponent {
  /**
   * @param {ReactElement} content - Banner Content
   *
   */
  content?: ReactElement;

  /**
   * @param {void} onClickBanner - On Click Banner
   *
   */
  onClickBanner?: () => void | undefined;
}
export function AdBanner({ content, onClickBanner }: IAddBannerComponent) {
  const BannerContent = content;
  return (
    <aside
      className="main-banner"
      style={{cursor: onClickBanner ? 'pointer' : 'auto'}}
      onClick={onClickBanner}
    >
      {content ? BannerContent : <p>Publicidade</p>}
    </aside>
  );
}
