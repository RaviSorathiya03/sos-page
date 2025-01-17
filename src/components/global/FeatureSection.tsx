import { cn } from "@/lib/utils";
import {
  IconHealthRecognition,
} from "@tabler/icons-react";
import { Battery, Building, GlassWater, Heart, Hotel, Paperclip, Sprout } from "lucide-react";

export function FeaturesSectionDemo() {
    const features = [
        {
          title: "Modern Campus",
          description:
            "Spanning six acres, the campus includes spacious classrooms with ample ventilation and natural lighting.",
          icon: <Building />,
        },
        {
          title: "Advanced Laboratories",
          description:
            "Resourceful laboratories, including a computer lab and a library with 7,000 books for competitive exam preparation.",
          icon: <Paperclip />,
        },
        {
            title: "Health Facilities",
            description:
              "On-campus health facility with trained professionals providing first-aid, health check-ups, and emergency care to ensure student well-being.",
            icon: <Heart />,
          },
        {
          title: "On-Campus Hostel",
          description:
            "Spacious, well-ventilated rooms with attached bathrooms, lockers, study tables, and hygienic food facilities.",
          icon: <Hotel />,
        },
        {
          title: "Pure Drinking Water",
          description:
            "An industrial R.O. plant provides clean and safe drinking water for all students and staff.",
          icon: <GlassWater />,
        },
        {
          title: "24/7 Power Backup",
          description:
            "A 105 HP generator ensures uninterrupted power supply throughout the campus.",
          icon: <Battery />,
        },
        {
          title: "Sports Facilities",
          description:
            "A large playground for sports and recreational activities promotes physical fitness.",
          icon: <Sprout />,
        },
        {
          title: "Nutritious Meals",
          description:
            "An 80 ft x 80 ft dining hall serving tasty, hygienic, and nutritious food to students and staff.",
          icon: <IconHealthRecognition />,
        },
      ];
      
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
