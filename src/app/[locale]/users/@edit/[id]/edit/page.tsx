import UserEditDialog from "@/components/users/UserEditDialog";
import { UserRole } from "@/types/user";
import { assertRole } from "@/utils/session";

type UserEditPageProps = {
  params: {
    id: string;
  };
};

async function UserEditPage({ params }: UserEditPageProps) {
  await assertRole(UserRole.Admin);

  return <UserEditDialog id={params.id} />;
}

export default UserEditPage;
