import Image from "next/image";
import Link from "next/link";
import DocumentInput from "./document-input";
import MenuBar from "@/components/MenuBar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Avatars } from "./avatars";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="Logo" width={36} height={36} />
        </Link>

        <div className="flex flex-col">
          <DocumentInput />
          <MenuBar />
        </div>
      </div>
      <div className="flex gap-3 items-center pl-6">
        <Avatars />
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/"}
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl={"/"}
          afterSelectPersonalUrl={"/"}
        />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
