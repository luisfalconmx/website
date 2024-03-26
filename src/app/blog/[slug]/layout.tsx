export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto mb-16 grid max-w-screen-xl gap-x-6 lg:my-16 lg:grid-cols-[1fr_350px] lg:px-4">
      {children}
    </div>
  )
}
