import {db} from "../../src/databases"
import { roleData } from "../data/role.data";


export async function startMocking() {
  const role = await db.user_Roles.create({
    data: roleData[0]
  })
  console.log({role})
}

export async function clearMocking() {
  const roles = db.user_Roles.deleteMany();
  await db.$transaction([roles]);
}

export async function getMockCount() {
  return await db.user_Roles.count();
}

// main()
//   .then(async () => {
//     await db.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await db.$disconnect();
//   })