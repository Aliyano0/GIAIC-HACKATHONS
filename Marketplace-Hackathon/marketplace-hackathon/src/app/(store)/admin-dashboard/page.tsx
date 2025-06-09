import { checkRole } from "../../../../utils/roles";
import { redirect } from "next/navigation";

async function AdminDashboard() {
  // checkRole is a util function that checks the user's role. If the user is not an admin, it will return false.
  // Protect the page from users who are not admins
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/not-authorised");
  }
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <h1 className="text-4xl font-semibold">
        Admin Dashboard is under development.
      </h1>
    </div>
  );
}

export default AdminDashboard;
