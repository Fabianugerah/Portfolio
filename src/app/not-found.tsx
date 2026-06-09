import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-neutral-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-white/50 mb-8">Halaman yang kamu cari tidak ada.</p>
      <Link
        href="/"
        className="text-neutral-400 border-2 border-neutral-400 px-6 py-2 rounded-xl font-semibold hover:bg-neutral-400 hover:text-black transition-all duration-300 no-underline"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
