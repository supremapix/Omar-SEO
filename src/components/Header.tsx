import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);
  const links = [
    ["/servicos", "Serviços"],
    ["/metodo", "Método"],
    ["/resultados", "Resultados"],
    ["/sobre", "Omar Skafi"],
    ["/blog", "Guias"],
  ];
  return (
    <header className="editorial-header">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label="Omar SEO — início">
          <img src="/favicon.svg" width="42" height="42" alt="" />
          <span>
            OMAR <b>SEO</b>
            <small>CONSULTORIA EM BUSCA</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([url, label]) => (
            <Link
              key={url}
              to={url}
              aria-current={pathname === url ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link to="/contato" className="header-contact">
          Vamos conversar <span aria-hidden="true">↗</span>
        </Link>
        <details
          ref={menu}
          className="mobile-menu"
          onKeyDown={(e) => {
            if (e.key === "Escape" && menu.current) {
              menu.current.open = false;
              menu.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>
            Menu <span aria-hidden="true">☰</span>
          </summary>
          <nav aria-label="Navegação móvel">
            {links.map(([url, label]) => (
              <Link key={url} to={url}>
                {label}
              </Link>
            ))}
            <Link to="/contato">Fale com Omar</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
