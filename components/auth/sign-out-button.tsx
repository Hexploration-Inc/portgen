import { doSignOut } from "@/app/actions/auth";
import { Button } from "../ui/button";

export function SignOutButton() {
  return (
    <form action={doSignOut}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
