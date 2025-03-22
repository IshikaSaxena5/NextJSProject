import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserForm from "../../components/UserForm";
import { getUser, createUser, updateUser } from "../../services/api";

export default function AddEditUser() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      getUser(id).then(setUser).catch(console.error);
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    if (id) {
      await updateUser(id, formData);
    } else {
      await createUser(formData);
    }
    router.push("/");
  };

  return <UserForm initialData={user} onSubmit={handleSubmit} />;
}
