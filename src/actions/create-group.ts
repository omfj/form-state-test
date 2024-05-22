"use server";

type ActionMessage = {
  success: boolean;
  message: string;
};

export const createGroupAction = async (
  _prevState: ActionMessage | undefined,
  formData: FormData
): Promise<ActionMessage> => {
  console.log("Creating group...");

  const name = formData.get("name") as string;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!name) {
    return {
      success: false,
      message: "Name is required!",
    };
  }

  return {
    success: true,
    message: `Group ${name} created!`,
  };
};
