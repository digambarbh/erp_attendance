import { HelpCircle } from "lucide-react";
import InfoPage from "./InfoPage";

export default function NotFoundPage() {
  return <InfoPage title="Page not found" icon={HelpCircle} description="This page does not exist." />;
}
