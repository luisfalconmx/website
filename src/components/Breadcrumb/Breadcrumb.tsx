'use client'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs'

const Breadcrumb = () => {
  return (
    <Breadcrumbs className="mx-auto mt-8 max-w-screen-xl px-6">
      <BreadcrumbItem href="/docs/components/button">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/breadcrumbs">
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/card">Card</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/checkbox">Checkbox</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/code" isCurrent>
        Code
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default Breadcrumb
