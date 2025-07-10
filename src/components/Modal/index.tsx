import React from 'react';

type ModalProps = {
  title?: React.ReactNode;
  subtitle?: string;
  content?: string[];
  tags?: string[];
  onClose: () => void;
};

const Modal = ({ title, subtitle, content, tags, onClose }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl border border-black/5 p-8 shadow-xl bg-[var(--card-bg)] text-[var(--body-color)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl text-[var(--body-color)]/60 hover:text-[var(--body-color)] transition"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ×
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-2xl font-bold mb-2 text-[var(--link-color)]">
            {title}
          </h2>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm mb-4 text-muted-foreground">{subtitle}</p>
        )}

        {/* Content */}
        {Array.isArray(content) && content.length > 0 && (
          <div className="space-y-1 text-left mb-4 text-sm leading-relaxed">
            {content.map((item, idx) => (
              <p key={idx} className="pl-4 -indent-2">• {item}</p>
            ))}
          </div>
        )}

        {/* Tags */}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="relative px-3 py-1 rounded-md text-sm font-semibold text-[var(--body-color)] shadow-[var(--tag-shadow)] bg-gradient-to-b from-[var(--tag-bg-start)] to-[var(--tag-bg-end)] transition-all hover:scale-105 hover:bg-[var(--link-color)] hover:text-white 
  before:content-[''] before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-[linear-gradient(135deg,var(--highlight-glow-1),var(--highlight-glow-2),var(--highlight-glow-3))] before:[mask-composite:exclude] before:pointer-events-none before:z-[1] before:opacity-0 hover:before:opacity-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
