import CertificationCard from '@/components/CertificationCard'
import contentfulClient from '@/clients/contentfulClient'
import Breadcrumb from '@/components/Breadcrumb'
import BlockGradient from '@/components/BlockGradient'
import PaginationTrack from '@/components/PaginationTrack'
import {
  GetCertificationsDocument,
  GetCertificationsQuery,
  GetCertificationsQueryVariables
} from '@/generated/contentful.schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'certifications'
}

export default async function Certifications({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const page = parseInt(searchParams.page) || 0
  const itemsPerPage = 10

  const client = contentfulClient()
  const response = await client.query<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >({
    query: GetCertificationsDocument,
    variables: {
      limit: itemsPerPage,
      skip: (page - 1) * itemsPerPage
    }
  })

  const totalCertifications = response.data.certificationCollection?.total || 0
  const certifications = response.data.certificationCollection?.items || []

  return (
    <>
      <BlockGradient variant="left" />
      <Breadcrumb />
      <div className="mx-auto mb-24 mt-16 max-w-screen-xl px-6 text-center">
        <h1 className="mb-6 block text-4xl font-bold">Certifications</h1>
        <p className="mx-auto block max-w-[70%] text-lg">
          Explore our growing collection of courses on key web design and
          development subjects. An industry expert has written each course,
          helped by members of the Chrome team.
        </p>
      </div>
      <div className="mx-auto mb-8 grid max-w-screen-xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
        {certifications.map((i) => (
          <CertificationCard
            key={i?.name}
            name={i?.name || ''}
            image={i?.picture?.url || ''}
            organizationName={i?.issuingOrganization || ''}
            organizationImage={i?.issuingOrganizationImage?.url || ''}
            date={i?.issueDate || ''}
            credentialUrl={i?.credentialUrl || ''}
          />
        ))}
      </div>
      <div className="mx-auto w-fit">
        <PaginationTrack
          total={totalCertifications}
          itemsPerPage={itemsPerPage}
          currentPage={page || 1}
        />
      </div>
    </>
  )
}
