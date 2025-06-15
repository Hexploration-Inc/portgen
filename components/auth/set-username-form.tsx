import { setUsername } from "@/app/actions/user";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function SetUsernameForm({
  initialEmailName,
}: {
  initialEmailName: string;
}) {
  return (
    <div className="max-w-md mx-auto border p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Welcome to PortGen!</h2>
      <p className="text-muted-foreground mb-6">
        Please choose a unique username to finish setting up your account.
      </p>
      <form action={setUsername} className="flex flex-col gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="e.g., janedoe"
            defaultValue={initialEmailName.split("@")[0]}
            required
            minLength={3}
          />
        </div>
        <Button type="submit">Set Username</Button>
      </form>
    </div>
  );
}
