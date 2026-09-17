export default function SiteFooter() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="contenedor footer__interior">
        <span>
          <strong>Raíz</strong> · Café de especialidad, Guatemala
        </span>
        <span>© {anio} Raíz · cafe@raiz.gt</span>
      </div>
    </footer>
  );
}
