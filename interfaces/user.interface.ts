export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  role: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
}
