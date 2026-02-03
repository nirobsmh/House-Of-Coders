import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceModulePage from "../../../components/ServiceModulePage";
import {
  serviceModuleMap,
  serviceModuleSlugs,
} from "../../../data/service-modules";

type ServiceDetailPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return serviceModuleSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = serviceModuleMap[params.slug];
  if (!service) {
    return {
      title: "Service Details | Home Of Coders",
      description: "Explore our specialized services and delivery modules.",
    };
  }

  return {
    title: `${service.title} ${service.accent} | Home Of Coders`,
    description: service.summaryText,
  };
}

export default async function ServiceDetailPage(
  { params }: ServiceDetailPageProps,
) {
  const { slug } = await params;
  const service = serviceModuleMap[slug];
  if (!service) {
    notFound();
  }

  return <ServiceModulePage service={service} />;
}
