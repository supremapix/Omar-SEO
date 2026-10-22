import React from "react";
import { Link } from "react-router-dom";
export function SupremaCredit() {
  return (
    <p className="site-credit">
      Desenvolvimento:{" "}
      <a
        href="https://supremasite.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Suprema Sites Express ↗
      </a>
    </p>
  );
}
export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="wordmark">
            OMAR <b>SEO</b>
          </Link>
          <p>
            Clareza para quem procura.
            <br />
            Estrutura para ser encontrado.
          </p>
          <p>
            Consultoria de Omar Skafi.
            <br />
            Curitiba e atendimento remoto.
          </p>
        </div>
        <nav aria-label="Explore">
          <strong>Explore</strong>
          <Link to="/servicos">Serviços</Link>
          <Link to="/metodo">Como trabalhamos</Link>
          <Link to="/resultados">Registros de projetos</Link>
          <Link to="/sobre">Sobre Omar</Link>
          <Link to="/blog">Guias de SEO</Link>
        </nav>
        <div>
          <strong>Converse sobre seu projeto</strong>
          <a href="https://wa.me/5541992721004">WhatsApp: (41) 99272-1004</a>
          <a href="tel:+5541987001004">Telefone: (41) 98700-1004</a>
          <a href="mailto:supremamidiabatel@gmail.com">
            supremamidiabatel@gmail.com
          </a>
          <Link to="/contato">Informações de contato →</Link>
        </div>
        <div>
          <strong>Em Curitiba</strong>
          <p>
            Av. Sete de Setembro, 2775
            <br />
            9º andar · Rebouças
            <br />
            Curitiba – PR · 80230-010
          </p>
          <a
            href="https://share.google/j6UoHq8uuHfvwOfiW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver localização ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Omar SEO · OSKAFI WEB SITES LTDA ME</p>
        <SupremaCredit />
      </div>
    </footer>
  );
}
