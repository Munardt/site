import Footer from "@/components/footer/footer";
import { contactButtons } from "@/types/contact-buttons";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { EmailContact } from "./email/email-contact";

export default function ContactPage() {
  return (
    <section className="py-4 px-6 text-white relative" id="contact">
      <div className="absolute inset-0 -z-10 blur-[100px] opacity-20 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500" />
      <h2 className="text-4xl font-bold text-center mb-8 text-default-800 dark:text-white">
        Vamos conversar
      </h2>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg">Me encontre nas redes ou envie um e-mail:</p>
        <div className="flex justify-center gap-6">
          <EmailContact />
          {contactButtons.map((button) => (
            <Button
              key={button.label}
              as={Link}
              color="secondary"
              href={button.href}
              startContent={<button.icon />}
              variant="shadow"
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="sticky mt-6 z-50">
        <Footer />
      </div>
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-indigo-950 to-purple-950" />
    </section>
  );
}
