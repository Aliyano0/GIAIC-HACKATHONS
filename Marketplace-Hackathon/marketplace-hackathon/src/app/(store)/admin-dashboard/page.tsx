// import { checkRole } from "../../../../utils/roles";
// import { redirect } from "next/navigation";

async function AdminDashboard() {
  // checkRole is a util function that checks the user's role. If the user is not an admin, it will return false.
  // Protect the page from users who are not admins
  // const isAdmin = await checkRole("admin");
  // if (!isAdmin) {
  //   redirect("/not-authorised");
  // }
  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
}

export default AdminDashboard;
