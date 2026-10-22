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
        <section
          className="footer-contact"
          aria-labelledby="footer-contact-title"
        >
          <h2 id="footer-contact-title">Fale com Omar</h2>
          <p>Escolha a forma de contato mais confortável para você.</p>
          <a href="https://wa.me/5541992721004">WhatsApp: (41) 99272-1004</a>
          <a href="tel:+5541987001004">Ligar: (41) 98700-1004</a>
          <a href="mailto:supremamidiabatel@gmail.com">
            E-mail: supremamidiabatel@gmail.com
          </a>
          <Link to="/contato">Ver todos os contatos →</Link>
        </section>
        <nav aria-label="Páginas do site">
          <h2>Páginas do site</h2>
          <Link to="/">Página inicial</Link>
          <Link to="/servicos">Conheça os serviços</Link>
          <Link to="/metodo">Como trabalhamos</Link>
          <Link to="/resultados">Projetos do portfólio</Link>
          <Link to="/sobre">Sobre Omar Skafi</Link>
          <Link to="/blog">Guias e dúvidas</Link>
        </nav>
        <section aria-labelledby="footer-address-title">
          <h2 id="footer-address-title">Endereço em Curitiba</h2>
          <p>
            Av. Sete de Setembro, 2775
            <br />
            9º andar · Rebouças
            <br />
            Curitiba - PR · 80230-010
          </p>
          <a
            href="https://share.google/j6UoHq8uuHfvwOfiW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir localização no mapa ↗
          </a>
        </section>
        <div>
          <Link
            to="/"
            className="wordmark"
            aria-label="Omar SEO - página inicial"
          >
            OMAR <b>SEO</b>
          </Link>
          <p>
            Consultoria de Omar Skafi.
            <br />
            Curitiba e atendimento remoto.
          </p>
          <p>
            Clareza para quem procura.
            <br />
            Estrutura para ser encontrado.
          </p>
        </div>
      </div>
      <a className="footer-back" href="#main-content">
        Voltar ao início do conteúdo ↑
      </a>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Omar SEO · OSKAFI WEB SITES LTDA ME</p>
        <SupremaCredit />
      </div>
    </footer>
  );
}
