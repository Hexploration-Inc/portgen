import { doSignIn } from "@/app/actions/auth";
import { Button } from "../ui/button";

export function SignInButton() {
  return (
    <form action={doSignIn}>
      <Button type="submit">Sign in with Google</Button>
    </form>
  );
}
