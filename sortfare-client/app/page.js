import FlightPageClient from "@/components/FlightPageClient";
import { flights } from "@/data/flights";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <FlightPageClient flights={flights} />
    </div>
  );
}
