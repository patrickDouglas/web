import BaseLayout from '@/layouts/base';
import Hero from '@/page-sections/hero';

export default function ContactPage() {
  return (
    <BaseLayout>
      <Hero title="Contact" subtitle="@todo">
        <input type="text" value="Your Email" />
      </Hero>
    </BaseLayout>
  );
}