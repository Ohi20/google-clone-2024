import Link from "next/link";
import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <Link
            href="https://about.google/"
            className="hover:underline cursor-pointer"
            target="_blank"
          >
            About
          </Link>
          <Link
            href="https://ads.google.com/intl/en_all/start/overview/?subid=bd-en-ha-awa-bk-a-b00!o3~Cj0KCQjwhtWvBhD9ARIsAOP0GojtubK1t1G8lFjGrCMtEOhoHaVzjPPlzylUwdiLZm5V5CZGgEAV8okaAmehEALw_wcB~139027759156~kwd-21297553~17792962241~611031582696&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GojtubK1t1G8lFjGrCMtEOhoHaVzjPPlzylUwdiLZm5V5CZGgEAV8okaAmehEALw_wcB&gclsrc=aw.ds#"
            className="hover:underline cursor-pointer"
            target="_blank"
          >
            Advertising
          </Link>
          <Link
            href="https://ads.google.com/intl/en_all/start/overview/?subid=bd-en-ha-awa-bk-a-b00!o3~Cj0KCQjwhtWvBhD9ARIsAOP0GojtubK1t1G8lFjGrCMtEOhoHaVzjPPlzylUwdiLZm5V5CZGgEAV8okaAmehEALw_wcB~139027759156~kwd-21297553~17792962241~611031582696&gad_source=1&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GojtubK1t1G8lFjGrCMtEOhoHaVzjPPlzylUwdiLZm5V5CZGgEAV8okaAmehEALw_wcB&gclsrc=aw.ds#"
            className="hover:underline cursor-pointer"
            target="_blank"
          >
            Business
          </Link>
          <Link
            href="https://www.google.com/search/howsearchworks/how-search-works/"
            className="hover:underline cursor-pointer"
            target="_blank"
          >
            How Search works
          </Link>
        </ul>
        <ul className="flex items-center space-x-6">
          <Link
            href="https://policies.google.com/privacy?hl=en-US"
            className="hover:underline cursor-pointer"
            target="_blank"
          >
            Privacy
          </Link>
          <Link
            href="https://policies.google.com/terms?hl=en-US"
            className="hover:underline cursor-pointer"
            target="_blank"
          >
            Terms
          </Link>
          <Link
            href="https://support.google.com/accounts/answer/3118621?hl=en"
            className="hover:underline cursor-pointer"
            target="_blank"
          >
            Settings
          </Link>
        </ul>
      </div>
    </footer>
  );
}
