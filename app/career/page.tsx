import type { Metadata } from "next";
import CareerContent from "@/components/CareerContent";

export const metadata: Metadata = {
  title: "Career | Mekark Cold Storage",
  description:
    "Join Mekark and build the future of industrial infrastructure. Explore career opportunities in design, engineering, manufacturing, and delivery.",
};

export default function CareerPage() {
  return <CareerContent />;
}
