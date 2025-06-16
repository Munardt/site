import Footer from "@/components/footer/footer";
import { EmailIcon, GithubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function ContactPage() {
  return (
    <section className="py-4 px-6 text-white relative" id="contact">
      <div className="absolute inset-0 -z-10 blur-[100px] opacity-20 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500" />
      <h2 className="text-4xl font-bold text-center mb-8">Vamos conversar</h2>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg">Me encontre nas redes ou envie um e-mail:</p>
        <div className="flex justify-center gap-6">
          <Button
            color="secondary"
            startContent={<EmailIcon />}
            as={Link}
            variant="shadow"
            href="mailto:munardt@hotmail.com"
          >
            Email
          </Button>
          <Button
            color="secondary"
            variant="shadow"
            as={Link}
            startContent={<GithubIcon />}
            href="https://github.com/munardt"
          >
            GitHub
          </Button>
          <Button
            color="secondary"
            variant="shadow"
            as={Link}
            startContent={<LinkedInIcon />}
            href="https://linkedin.com/in/munardt"
          >
            LinkedIn
          </Button>
        </div>
      </div>
      <div className="sticky mt-6 z-50">
        <Footer />
      </div>
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-indigo-950 to-purple-950"></div>
    </section>
  );
}
