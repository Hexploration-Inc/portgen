import { doSignIn } from "@/app/actions/auth";
import { Button } from "../ui/button";

export function SignInForm() {
  return (
    <form action={doSignIn} className="flex flex-col gap-2 w-full max-w-xs">
      <Button type="submit" name="provider" value="google">
        Sign in with Google
      </Button>
      <Button type="submit" name="provider" value="github" variant="secondary">
        Sign in with GitHub
      </Button>
    </form>
  );
}
