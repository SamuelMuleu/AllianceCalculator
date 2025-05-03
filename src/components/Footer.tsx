export function Footer() {
  return (
    <footer className="mt-12 py-6  background-color-black;">
      <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Calculadora de Alianças</p>
        <p className="mt-1">Desenvolvido por Samuel Muleu</p>
      </div>
    </footer>
  );
}
