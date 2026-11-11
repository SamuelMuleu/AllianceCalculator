export function Footer() {
  return (
    <footer className="py-8">
      <p className="text-center text-sm text-ink-500">
        &copy; {new Date().getFullYear()} Calculadora de Alianças · Desenvolvido por{" "}
        <a
          href="https://github.com/SamuelMuleu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-300 underline-offset-4 hover:text-gold-400 hover:underline"
        >
          Samuel Muleu
        </a>
      </p>
    </footer>
  );
}
