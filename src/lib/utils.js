import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

/**
 * 
 * @param {import("zod").ZodError} error 
 * @returns {object} { fieldErrors, globalMessage }
 */
export function formatZodErrors(error) {
  if (!error?.issues) return { fieldErrors: {}, globalMessage: "Erreur de validation" };

  const fieldErrors = {};
  const messages = [];

  error.issues.forEach((issue) => {
    const field = issue.path[0];
    fieldErrors[field] = issue.message;
    messages.push(`${issue.message}`);
  });

  return {
    fieldErrors,
    globalMessage: messages.join(" | "),
  };
}
