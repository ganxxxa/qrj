import Accordion from "@/app/components/accordion";
import { services } from "@/app/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((p) => ({
    uniquepage: p.name.toString(),
  }));
}

export default function UniquePage({ params: { uniquepage } }) {
  const service = services.find((p) => p.name.toString() === uniquepage);
  if (!service) {
    notFound();
  }

  return (
    <main>
      <div className="w-screen flex flex-col justify-center items-center px-4 sm:px-10 lg:px-32 xl:px-40 h-screen gap-16">
        <h1 className="font-black uppercase text-8xl">{service.name}</h1>
        <p className="text-2xl font-medium text-justify">
          We turn ideas into reality with creative solutions that help you stand
          out. Our team brings together innovative thinking and cutting-edge
          technology to develop customized branding, Marketing and web solutions
          that exceed your expectations.
        </p>
      </div>
      <Accordion data={service.data} />
    </main>
  );
}
