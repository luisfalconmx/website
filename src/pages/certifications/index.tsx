import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import MainLayout from '@/Layouts/MainLayout'
import contentfulClient from '@/clients/contentfulClient'
import humanDate from '@/utils/humanDate'
import Image from 'next/image'
import {
  GetCertificationsDocument,
  GetCertificationsQuery,
  GetCertificationsQueryVariables
} from '@/generated/contentful.schema'

export const getStaticProps = (async () => {
  const client = contentfulClient()
  const response = await client.query<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >({
    query: GetCertificationsDocument
  })

  return {
    props: {
      total: response.data.certificationCollection?.total,
      certifications: response.data.certificationCollection?.items
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects({
  total,
  certifications
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <h1 className="mb-10 text-4xl font-bold">{total} Certifications</h1>

      <div className="grid grid-cols-1 gap-y-8">
        {certifications?.map((certification) => (
          <div
            className="grid grid-cols-[720px,1fr] bg-ghost dark:bg-onyx"
            key={certification?.name}
          >
            <Image
              src={certification?.picture?.url || ''}
              alt={certification?.name || ''}
              width="720"
              height="720"
              className="border border-r-0 border-onyx/30"
            />
            <div className="border border-l-0 border-onyx/30 px-8 pb-2 pt-10">
              <Image
                src={certification?.issuingOrganizationImage?.url || ''}
                alt={certification?.issuingOrganization || ''}
                width="50"
                height="50"
                className="mb-2 block rounded-lg"
              />
              <h2 className="mb-3 text-4xl font-bold">
                {certification?.name || ''}
              </h2>

              <b className="text-lg">Issuing Organization</b>
              <p className="mb-6 block text-iron dark:text-smoke">
                {certification?.issuingOrganization}
              </p>

              <b className="text-lg">Issue Date</b>
              <p className="mb-6 block text-iron dark:text-smoke">
                {humanDate(certification?.issueDate)}
              </p>

              <b className="text-lg">Certification ID</b>
              <p className="mb-6 max-w-full overflow-clip text-iron dark:text-smoke">
                {certification?.credentialId}
              </p>

              <b className="text-lg">Certification URL</b>
              <a
                className="block text-iron underline dark:text-smoke"
                href={certification?.credentialUrl || ''}
              >
                {certification?.credentialUrl}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="h-full rounded-lg bg-onyx"></div>
    </MainLayout>
  )
}
