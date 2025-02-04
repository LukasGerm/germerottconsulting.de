import { Button } from "./button";
import { Bars3Icon } from "@heroicons/react/16/solid";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { Title } from "./title";

import { MobileNavigationItems } from "./mobile-navigation-items";

export const MobileNavigation = () => {
  return (
    <div className="block md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="fixed bottom-8 right-1/3 left-1/3 z-10" size="lg">
            Navigation
            <Bars3Icon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>
                <Title variant="h3">Navigation</Title>
              </DrawerTitle>
            </DrawerHeader>
            <DrawerClose className="p-4 flex flex-col gap-3">
              <MobileNavigationItems />
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
