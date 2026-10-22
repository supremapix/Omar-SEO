import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Share2, MessageCircle, X, Copy } from "lucide-react";
export function FloatingActions() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const field = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const [share, setShare] = useState({
    url: "https://www.omarseo.digital/",
    title: "Omar SEO",
    image: "https://www.omarseo.digital/og-default.jpg",
  });
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    dialog.current?.close();
    setFeedback("");
  }, [pathname]);
  function open() {
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )?.href;
    const raw = document.querySelector<HTMLMetaElement>(
      'meta[property="og:image"]',
    )?.content;
    setShare({
      url: canonical || new URL(pathname, "https://www.omarseo.digital").href,
      title: document.title,
      image: new URL(raw || "/og-default.jpg", "https://www.omarseo.digital")
        .href,
    });
    setFeedback("");
    dialog.current?.showModal();
  }
  async function copy() {
    try {
      if (!navigator.clipboard?.writeText) throw Error("unavailable");
      await navigator.clipboard.writeText(share.url);
      setFeedback("Link copiado.");
    } catch {
      field.current?.focus();
      field.current?.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch {}
      setFeedback(
        copied
          ? "Link copiado."
          : "Não foi possível copiar automaticamente. O link está selecionado: use Copiar no seu dispositivo.",
      );
    }
  }
  const encoded = encodeURIComponent(share.url),
    text = encodeURIComponent(share.title + " " + share.url);
  const links = [
    ["WhatsApp", "https://api.whatsapp.com/send?text=" + text],
    ["Facebook", "https://www.facebook.com/sharer/sharer.php?u=" + encoded],
    [
      "X",
      "https://twitter.com/intent/tweet?url=" +
        encoded +
        "&text=" +
        encodeURIComponent(share.title),
    ],
    [
      "Pinterest",
      "https://www.pinterest.com/pin/create/button/?url=" +
        encoded +
        "&media=" +
        encodeURIComponent(share.image) +
        "&description=" +
        encodeURIComponent(share.title),
    ],
    [
      "LinkedIn",
      "https://www.linkedin.com/sharing/share-offsite/?url=" + encoded,
    ],
    ["Threads", "https://www.threads.net/intent/post?text=" + text],
  ];
  return (
    <>
      <div className="floating-dock" aria-label="Ações rápidas">
        <button ref={opener} onClick={open} aria-haspopup="dialog">
          <Share2 size={19} aria-hidden="true" />
          Compartilhar
        </button>
        <a
          className="dock-contact"
          href="https://wa.me/5541992721004"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com Omar no WhatsApp"
        >
          <MessageCircle size={20} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <dialog
        ref={dialog}
        className="share-dialog"
        aria-labelledby="share-title"
        onClose={() => opener.current?.focus()}
        onClick={(e) => {
          if (e.target === dialog.current) {
            const r = dialog.current.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              dialog.current.close();
          }
        }}
      >
        <div className="share-heading">
          <h2 id="share-title">Compartilhar esta página</h2>
          <button
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label="Fechar compartilhamento"
          >
            <X size={24} />
          </button>
        </div>
        <p>{share.title}</p>
        <div className="share-networks">
          {links.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">
              {name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
        <label htmlFor="share-url">Link desta página</label>
        <input
          id="share-url"
          ref={field}
          value={share.url}
          readOnly
          onFocus={(e) => e.currentTarget.select()}
        />
        <button className="copy-share" onClick={copy}>
          <Copy size={18} aria-hidden="true" />
          Copiar link
        </button>
        <p className="share-feedback" role="status" aria-live="polite">
          {feedback}
        </p>
        <p className="share-hint">
          Você pode revisar a mensagem na rede escolhida antes de publicar.
        </p>
      </dialog>
    </>
  );
}
