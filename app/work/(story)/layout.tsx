import StoryMotion from '@/components/story/StoryMotion';

// Shared by every case study: scroll, entrance and hover motion.
export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <StoryMotion />
    </>
  );
}
