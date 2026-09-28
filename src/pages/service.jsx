import { FileText } from "lucide-react";
import { useParams } from "react-router-dom";
import InfoPage from "./InfoPage";

export default function ServicePage() {
  const { section = "" } = useParams();
  const title = section
    .split("-")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return <InfoPage title={title} icon={FileText} description="Service details will appear here." />;
}
