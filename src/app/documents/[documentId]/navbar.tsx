import Image from "next/image";
import Link from "next/link";
import DocumentInput from "./document-input";
import MenuBar from "@/components/MenuBar";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Avatars } from "./avatars";
import Inbox from "./inbox";
import { NavbarProps } from "@/types/type";

const Navbar = ({ data }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={36}
            height={36}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <div className="flex flex-col">
          <DocumentInput title={data.title} id={data._id} />
          <MenuBar data={data} />
        </div>
      </div>
      <div className="flex gap-3 items-center pl-6">
        <Avatars />
        <Inbox />
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
