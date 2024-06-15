import { createUser } from "@/sanity/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
    const user = await currentUser();

    if (user) {
        await createUser({
            clerkId: user.id,
            username: user.username || "",
            email: user.emailAddresses[0].emailAddress,
        });
    }

    return redirect("/");
}
