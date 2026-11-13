import StoryMotion from '@/components/story/StoryMotion';
import LockGuard from '@/components/lock/LockGuard';

// Shared by every case study: scroll, entrance and hover motion.
export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LockGuard />
      {children}
      <StoryMotion />
    </>
  );
}
