import { redirect } from 'next/navigation';

export default function ProjectsIndex() {
  redirect('/products');
  return null;
} 