"use client";

import { useFormStatus } from "react-dom";
import { createPortfolio } from "@/app/actions/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useRef, useActionState } from "react";

const initialState = {
  error: "",
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="self-start" disabled={pending}>
      {pending ? "Creating..." : "Create"}
    </Button>
  );
}

export function CreatePortfolioForm() {
  const [state, formAction] = useActionState(createPortfolio, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset the form on successful submission
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        className="max-w-md flex flex-col gap-4"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Portfolio Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="e.g., My Software Projects"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="isPublic" name="isPublic" />
          <Label htmlFor="isPublic">Make portfolio public</Label>
        </div>
        <SubmitButton />
      </form>
      {/* Display server messages */}
      {state.error && (
        <p className="text-sm font-medium text-destructive mt-2">
          {state.error}
        </p>
      )}
      {state.success && state.message && (
        <p className="text-sm font-medium text-emerald-500 mt-2">
          {state.message}
        </p>
      )}
    </>
  );
}
