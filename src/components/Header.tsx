import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  const { pathname } = useLocation();
  function close(restore = false) {
    if (menu.current) menu.current.open = false;
    if (restore) menu.current?.querySelector("summary")?.focus();
  }
  useEffect(() => {
    if (menu.current?.open) {
      close();
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname]);
  useEffect(() => {
    function outside(e: PointerEvent) {
      if (menu.current?.open && !menu.current.contains(e.target as Node))
        close();
    }
    function resize() {
      if (innerWidth > 1200) close();
    }
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, []);
  const links = [
    ["/", "Início", "Página inicial"],
    ["/servicos", "Serviços", "Conheça os serviços"],
    ["/metodo", "Método", "Como trabalhamos"],
    ["/resultados", "Portfólio", "Projetos do portfólio"],
    ["/sobre", "Sobre Omar", "Sobre Omar Skafi"],
    ["/blog", "Guias", "Guias e dúvidas"],
  ];
  return (
    <header className="editorial-header">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label="Omar SEO - início">
          <img src="/favicon.svg" width="42" height="42" alt="" />
          <span>
            OMAR <b>SEO</b>
            <small>CONSULTORIA EM BUSCA</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.slice(1).map(([url, label]) => (
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
          Contato
        </Link>
        <details
          ref={menu}
          className="mobile-menu"
          onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) close(); }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              close(true);
            }
          }}
        >
          <summary>
            Menu <span aria-hidden="true">☰</span>
          </summary>
          <nav
            aria-label="Navegação móvel"
            onClick={(e) => {
              const a = (e.target as HTMLElement).closest("a");
              if (a?.getAttribute("href")?.startsWith("/")) {
                close();
                requestAnimationFrame(() =>
                  document
                    .getElementById("main-content")
                    ?.focus({ preventScroll: true }),
                );
              }
            }}
          >
            <div className="menu-heading">
              <strong>Encontre o que precisa</strong>
              <button type="button" onClick={() => close(true)}>
                Fechar menu <span aria-hidden="true">×</span>
              </button>
            </div>
            {links.map(([url, , label]) => (
              <Link
                key={url}
                to={url}
                aria-current={pathname === url ? "page" : undefined}
              >
                {label}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
            <div className="menu-contact">
              <strong>Precisa de ajuda?</strong>
              <Link to="/contato">Todas as formas de contato</Link>
              <a href="https://wa.me/5541992721004">Conversar no WhatsApp</a>
              <a href="tel:+5541987001004">Ligar: (41) 98700-1004</a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
