import PanicDetail from "@/components/PanicDetails";

export default async function PanicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <PanicDetail id={id} />;
}
