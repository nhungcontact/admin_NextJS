import EmptyContent from "@/components/errors/EmptyContent";

export type DefaultPageProps = object;

function DefaultPage({}: DefaultPageProps) {
  return <EmptyContent caption="Select a user to see detail" />;
}

export default DefaultPage;
