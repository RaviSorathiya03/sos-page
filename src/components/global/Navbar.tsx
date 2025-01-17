"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";


const SchoolNavbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-[60vw] flex items-center justify-center border-[1px] rounded-full mt-5">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about/history">Our History</HoveredLink>
            <HoveredLink href="/about/mission">Mission & Vision</HoveredLink>
            <HoveredLink href="/about/staff">Faculty & Staff</HoveredLink>
            <HoveredLink href="/about/campus">Campus Tour</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Academics">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Elementary"
              description="Nurturing young minds (K-5)"
              href="/academics/elementary"
              src="/placeholder.svg?height=70&width=140"
            />
            <ProductItem
              title="Middle School"
              description="Building foundations (6-8)"
              href="/academics/middle-school"
              src="/placeholder.svg?height=70&width=140"
            />
            <ProductItem
              title="High School"
              description="Preparing for the future (9-12)"
              href="/academics/high-school"
              src="/placeholder.svg?height=70&width=140"
            />
            <ProductItem
              title="Special Programs"
              description="Enrichment opportunities"
              href="/academics/special-programs"
              src="/placeholder.svg?height=70&width=140"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Admissions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/admissions/process">How to Apply</HoveredLink>
            <HoveredLink href="/admissions/tuition">Tuition & Fees</HoveredLink>
            <HoveredLink href="/admissions/financial-aid">Financial Aid</HoveredLink>
            <HoveredLink href="/admissions/visit">Visit Us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Student Life">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/student-life/clubs">Clubs & Activities</HoveredLink>
            <HoveredLink href="/student-life/athletics">Athletics</HoveredLink>
            <HoveredLink href="/student-life/arts">Arts & Culture</HoveredLink>
            <HoveredLink href="/student-life/community-service">Community Service</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact/general">General Inquiries</HoveredLink>
            <HoveredLink href="/contact/admissions">Admissions Office</HoveredLink>
            <HoveredLink href="/contact/support">Support Services</HoveredLink>
            <HoveredLink href="/contact/alumni">Alumni Relations</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SchoolNavbar;

