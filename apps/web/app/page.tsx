import { AdBanner, HeaderComponent, Typography } from "@repo/ui";
import './styles.scss'

export default function Page(): JSX.Element {
  return (
    <>
      <nav>
        <HeaderComponent navText="NEWS APP" />
      </nav>
      <main className="container">
        <section id='ad-section'>
          <AdBanner size="contain" />
        </section>

        <section id="primary-news-section" className="primary-news-container">
          <div>
            <div>
              <Typography text="Categoria" type="category" />
              <Typography text="Titulo da máteria aqui" type="title" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
