import { getMeshSDK } from '../../.mesh'

export const getStaticProps = async () => {
  const { UserViewer } = await getMeshSDK()
  const { viewer } = await UserViewer()
  return { props: { data: viewer } }
}

export default function Test({ data }: any) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
