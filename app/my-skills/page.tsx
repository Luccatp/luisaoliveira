import BouncingLine from "@/components/Animation/BouncingLine";
import ChangingTitle from "@/components/Animation/ChangingTitle";
import DeveloperSection from "@/components/DeveloperSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MyProjects from "@/components/MyProjects";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <MaxWidthWrapper>
      <DeveloperSection />
      <section className="min-h-screen mb-32 border-t-2">
        <MyProjects />
      </section>
    </MaxWidthWrapper>
  );
};

export default Page;
