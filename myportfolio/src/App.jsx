import Navbar from './navbar';

function App() {

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-2xl px-6 py-12">
          {/* Header Navigation */}
          <header className="w-full flex justify-between items-center mb-10">
            <nav className="flex items-center space-x-4">
              <a
                href="./"
                className="text-xl font-bold text-black hover:text-blue-500 transition-colors"
              >
                Gyan Dev
              </a>
            </nav>
            <nav className="flex space-x-4">
              <a
                href="./blogs"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Blogs
              </a>
            </nav>
          </header>

          {/* Main Content */}
          <main className="space-y-6 mb-10">
            <p className="text-lg text-gray-800">
              I cofounded <a
                href="https://www.runalloy.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alloy
              </a>, a modern iPaaS backed by $27M from a16z, Bain, Y Combinator, & others. These days I'm thinking a lot about AI agents.
            </p>

            <p className="text-lg text-gray-800">
              In my spare time I enjoy studying technology more broadly — history, market currents, emerging research. I also support other founders as an angel, see more on my <a
                href="./portfolio"
                className="text-blue-600 hover:underline"
              >
                Investing
              </a> page.
            </p>

            <p className="text-lg text-gray-800">
              I'm a self-taught engineer, Harvard dropout, YC grad, & Thiel Fellow. I grew up in Atlanta and currently reside in SF.
            </p>
          </main>

          <hr className='' />

          {/* Social Links */}
          <footer className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/saradu"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn (/saradu)
            </a>
            <a
              href="https://www.twitter.com/saraduit"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter (@saraduit)
            </a>
            <a
              href="https://instagram.com/sarad.u"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram (@sarad.u)
            </a>
            <a
              href="https://saradu.substack.com/"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Substack
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
