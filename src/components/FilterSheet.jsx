import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PriceRangeSlider from "./Favorites/PriceRangeSlider";

const ITEMS = [
  {
    title: "Sort by",
    values: [
      "Price(LOW TO HIGH)",
      "Price(HIGH TO LOW)",
      "Newest",
      "Top Sellers",
    ],
    type: "radio",
  },
  {
    title: "Discount",
    values: ["Up to 20%", "20 - 30%", "30-40%", "40% and More"],
    type: "checkbox",
  },
  {
    title: "Gender",
    values: ["Male", "Female", "Unisex", "Kids"],
    type: "checkbox",
  },
  {
    title: "Size",
    values: ["SM", "Md", "Lg", "XL", "2XL"],
    type: "checkbox",
  },
  {
    title: "Price",
    values: [30, 3500], // min and max values for the slider
    type: "draggable",
  },
];

function FilterSheet({ children }) {
  const [priceRange, setPriceRange] = useState(ITEMS[4].values);

  const handlePriceChange = (newValues) => {
    setPriceRange(newValues);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-between mt-4">
              <p>Filter & Sort</p>
              <Button className="text-gray-600" variant="link">
                Clear all
              </Button>
            </div>
          </SheetTitle>
          <SheetDescription className="text-lg font-semibold text-black">
            {ITEMS.map((item, index) => (
              <Accordion key={index} type="multiple" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1">
                    {item.type === "draggable" ? (
                      <div className="space-y-4">
                        <PriceRangeSlider
                          min={item.values[0]}
                          max={item.values[1]}
                          step={10}
                        />
                      </div>
                    ) : (
                      item.values.map((value, valueIndex) => (
                        <div
                          className="flex items-center space-x-2"
                          key={valueIndex}
                        >
                          <Checkbox
                            id={`${item.title}-${valueIndex}`}
                            className="w-5 h-5"
                          />
                          <label
                            htmlFor={`${item.title}-${valueIndex}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {value}
                          </label>
                        </div>
                      ))
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default FilterSheet;
