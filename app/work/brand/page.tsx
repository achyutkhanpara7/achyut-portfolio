import { redirect } from 'next/navigation';

// Brand work is off the site for now; old links land on all work.
export default function BrandWork() {
  redirect('/work/');
}
