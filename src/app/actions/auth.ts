'use server';

type SignUpResult = {
  success: boolean;
  message: string;
};

export async function signUpUser(formData: FormData): Promise<SignUpResult> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const email = String(formData.get('email') ?? '');
  const name = String(formData.get('fullName') ?? formData.get('name') ?? '');

  // Parsed values are intentionally kept local for mocked backend behavior.
  void email;
  void name;

  return { success: true, message: 'Account created!' };
}
