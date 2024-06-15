import { getUsers } from "@/sanity/utils";

export default async function Page() {
    const users = await getUsers();

    return <div>{JSON.stringify(users)}</div>;
}
