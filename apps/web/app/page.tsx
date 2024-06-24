import { HeaderComponent } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <>
      <nav>
        <HeaderComponent navText="NEWS APP" />
      </nav>
      <main>
        <section id='ad-section'>
          <div>
            <p>Publicidade</p>
          </div>
        </section>
      </main>
    </>
  );
}
