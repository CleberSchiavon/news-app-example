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

  /**
   * @param {"small" | "medium" | "large" | "contain"} size - Size of the banner
   *
   */
  size?: "small" | "medium" | "large" | "contain";
}

export function AdBanner({ content, onClickBanner, size = "medium" }: IAddBannerComponent) {
  const BannerContent = content;
  const bannerClass = `main-banner ${size}`;

  return (
    <aside
      className={bannerClass}
      style={{ cursor: onClickBanner ? 'pointer' : 'auto' }}
      onClick={onClickBanner}
    >
      {content ? BannerContent : <p>Publicidade</p>}
    </aside>
  );
}