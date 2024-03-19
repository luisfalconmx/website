'use client'
import { usePathname } from 'next/navigation'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs'

const Breadcrumb = () => {
  const pathname = usePathname()
  const routes = pathname.split('/')

  const humanRoute = (route: string) => {
    return route.replace(/-/g, ' ')
  }

  return (
    <Breadcrumbs className="mx-auto mt-8 max-w-screen-xl px-6">
      {routes.map((route, index) => (
        <BreadcrumbItem key={`${route || 'home'}-${index}`} href={`/${route}`}>
          <span className="first-letter:uppercase">
            {humanRoute(route) || 'home'}
          </span>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  )
}

export default Breadcrumb
