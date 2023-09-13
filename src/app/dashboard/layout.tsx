import Dashboard from "@/components/dashboard/Dashboard"

  
export default function DasboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <Dashboard>{children}</Dashboard>
    
  }