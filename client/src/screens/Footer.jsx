export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <div className="font-sans tracking-tighter text-xs text-gray-400">
          2021 | Designed and coded by{" "}
          <a
            href="https://www.linkedin.com/in/yeanacho/"
            className="font-semibold italic text-gray-700"
          >
            Yeana Cho
          </a>
        </div>
        <a href="#home">
          <i className="far fa-arrow-alt-circle-up text-4xl text-gray-400" />
        </a>
      </div>
    </footer>
  );
}
