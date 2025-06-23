import { Link } from "@heroui/link";

/**
 * Componente de rodapé do site.
 * @returns {JSX.Element} Componente de rodapé do site.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        title="Munardt"
      >
        <span className="text-default-600">
          &copy; {new Date().getFullYear()} Munardt
        </span>
      </Link>
    </footer>
  );
}
