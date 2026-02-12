import Link from "next/link";
import LogoZen2Spirit from "@/assets/logo-zen2spirit.svg";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import { routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="w-full py-10 bg-dark text-gray-50">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <LogoZen2Spirit className="w-12 h-12" />
            <h3 className="font-title text-2xl font-bold">Zen2Spirit</h3>
          </div>
          <p className="text-sm text-gray-400">
            &copy; 2024-{new Date().getFullYear()}{" "}
            <Link href="/" className="text-primary">
              Zen2Spirit
            </Link>
            . Alle rechten voorbehouden.
          </p>
          <div className="flex gap-2">
            <SocialIcon
              url="https://www.facebook.com/Zen2Spirit"
              fgColor="#ffffff"
              bgColor="#848484"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              url="https://www.instagram.com/zen2spirit/"
              fgColor="#ffffff"
              bgColor="#848484"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 40, width: 40 }}
            />
            <Link
              href="tel:+32487223615"
              className="w-10 h-10 flex justify-center items-center bg-dark-gray rounded-4xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex gap-15">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">Overview</h4>
            <ul className="flex flex-col gap-1">
              {routes.map((route) => (
                <li key={route.name}>
                  <Link
                    href={route.path}
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">Legaal</h4>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href={"/privacy-policy"}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link
                  href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=783884417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                  BTW: BE 0783.884.417
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-primary">Bereik ons</h4>
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="mailto:info@zen2spirit.be"
                  className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  info@zen2spirit.be
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+32487223615"
                  className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  +32(0) 487 22 36 15
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.app.goo.gl/eCXU3wNMXDGNtajj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  Meersstraat 176, 1742 Ternat
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
