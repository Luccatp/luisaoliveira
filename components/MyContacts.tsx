"use client";
import { Linkedin, Instagram, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FC, useEffect } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MyContactsProps {}

const MyContacts: FC<MyContactsProps> = ({}) => {
  const [isActivated, setIsActivated] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (isActivated) {
      setTimeout(() => {
        setIsHidden(true);
      }, 1200);
    } else {
      setIsHidden(false);
    }
  }, [isActivated]);

  return (
    <div className="flex gap-20 relative">
      <div
        className={cn(
          "absolute w-full z-10 h-full text-sm ",
          isHidden && "hidden"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 w-full transition-all h-full duration-1000 opacity-100 bg-background rounded-md justify-center",
            isActivated && "opacity-0"
          )}
        >
          <Switch
            id="my-contacts"
            checked={isActivated}
            onCheckedChange={setIsActivated}
          />
          <Label htmlFor="my-contacts">Activate my contacts</Label>
        </div>
      </div>
      <Link href="https://www.linkedin.com/in/luccaparadeda/" target="_blank">
        <Linkedin className="w-7 h-7 text-sky-500" />
      </Link>
      <Link href="https://www.instagram.com/luccaparadeda/" target="_blank">
        <Instagram className="w-7 h-7 text-purple-500" />
      </Link>
      <a href="mailto:luccaparadedaprofessional@email.com?subject=From%20your%20website!">
        <Mail className="w-7 h-7 text-red-500" />
      </a>
    </div>
  );
};

export default MyContacts;
