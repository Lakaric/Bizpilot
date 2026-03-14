import Sidebar from "@/components/dashboard/Sidebar";
import { SidebarProvider } from "@/contexts/SidebarContext";

export default function DevSidebarPage() {
    return (
        <SidebarProvider>
            <div className="min-h-screen bg-gray-50 flex">
                <Sidebar />
                <div className="ml-[256px] flex-1 p-8">
                <h1 className="text-2xl font-bold">Dashboard Main Content Area</h1>
                <p>This is test content to verify the sidebar layout.</p>
            </div>
        </div>
        </SidebarProvider>
    );
}
