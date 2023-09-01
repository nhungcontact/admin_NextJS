import UserRemoveDialog from "@/components/users/UserRemoveDialog";
import { UserRole } from "@/types/user";
import { assertRole } from "@/utils/session";

type UserRemovePageProps = {
  params: {
    id: string;
  };
};

async function UserRemovePage({ params }: UserRemovePageProps) {
  await assertRole(UserRole.Admin);

  return <UserRemoveDialog id={params.id} />;
}

export default UserRemovePage;
