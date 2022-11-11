import { Domain as DomainDetail } from "../src/types/Domain";
import thumbnail from "../public/thumbnail.webp";

type Domain = {
  _id: DomainDetail["_id"];
  title: DomainDetail["title"];
  status: DomainDetail["status"];
  price: DomainDetail["price"];
};

async function getDomains() {
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/v1/domains`
  );
  const domains = await res.json();
  return domains.data;
}

const EmailAlert = () => (
  <div className="alert alert-info shadow-lg mt-6">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current flex-shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>
        Email{" "}
        <a
          href={`mailto:hussu010@gmail.com?subject="Purchase of .btc domain."&body="I would like to purchase DOMAIN.btc."`}
        >
          hussu010@gmail.com
        </a>{" "}
        to purchase domains.
      </span>
    </div>
  </div>
);

const Domain = ({ title, status, price }: Domain) => (
  <article className="flex flex-col mx-auto max-w-sm w-full py-6 px-3 cursor-pointer transform duration-500 hover:-translate-y-1">
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div
        className="bg-cover bg-center h-80 p-4"
        style={{
          backgroundImage: `url(${thumbnail.src})`,
        }}
      >
        <div className="flex justify-end">
          <svg
            className="h-6 w-6 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
          </svg>
        </div>
      </div>
      <div className="p-4 py-5">
        <p className="text-3xl text-gray-900 mt-1.5 mb-1.5">{title}</p>
        <p className="text-gray-700 font-bold">
          {status} • {price} STX
        </p>
      </div>
    </div>
  </article>
);

export default async function Domains() {
  const domains = await getDomains();

  return (
    <>
      <EmailAlert />
      <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-4 antialiased">
        {domains.map((domain: Domain) => (
          <Domain key={domain._id} {...domain} />
        ))}
      </section>
    </>
  );
}
