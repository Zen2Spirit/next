import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../common/button";
import { sendEmail } from "@/lib/send-email";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await sendEmail(data);

      if (!result.success) {
        setError(result.error || "Failed to send email");
        return;
      }

      reset();
      setError(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="grow flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <input
          type="text"
          required
          disabled={isLoading}
          className="grow p-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Naam"
          {...register("name")}
        />
        <input
          type="email"
          required
          disabled={isLoading}
          className="grow p-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <input
        type="text"
        required
        disabled={isLoading}
        className="p-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
        placeholder="Onderwerp"
        {...register("subject")}
      />
      <textarea
        required
        disabled={isLoading}
        className="p-3 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
        rows={10}
        placeholder="Bericht"
        {...register("message")}
      />
      {errors.name && (
        <span className="text-red-500">Naam veld is incorrect</span>
      )}
      {errors.email && (
        <span className="text-red-500">Email veld is incorrect</span>
      )}
      {errors.subject && (
        <span className="text-red-500">Onderwerp veld is incorrect</span>
      )}
      {errors.message && (
        <span className="text-red-500">Bericht veld is incorrect</span>
      )}
      {error && <span className="text-red-500">{error}</span>}
      <div>
        <Button
          type="submit"
          label="Verzenden"
          disabled={isLoading}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
