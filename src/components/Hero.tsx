import profileImg from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-4 pt-10 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-6xl mx-auto py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-between">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Hello, I'm Sourav
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8">
              Mobile App Developer
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About Me
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I’m Sourav Ramesh, a mobile app developer with experience in
                React Native. Over the past 1.5 years, I’ve developed and
                deployed mobile and web apps, focusing on performance, clean
                code, and great user experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/sourav-ramesh-4bb3aa20b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                View LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-86 lg:h-96 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-2xl">
              <img
                src={profileImg}
                alt="Sourav Ramesh"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
