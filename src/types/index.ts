export type ComplaintStatus = 'pending' | 'in-progress' | 'resolved';
export type ComplaintPriority = 'low' | 'medium' | 'high';
export type UserRole = 'student' | 'admin';

export interface Message {
  id: string;
  content: string;
  sender: 'admin' | 'student';
  timestamp: string;
  read: boolean;
}

export interface Complaint {
  id: int;
  title: string;
  description: string;
  category: string;
  ai_response: string;
  admin_response: string;
  user_id: number;
  department_id: number | null;
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
  access_token:string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}