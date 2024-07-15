import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


function Navigation({ items, className }) {
  const searchParams = useSearchParams();

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>

          <Link
            href={{
              pathname: '/',
              query: Object.fromEntries(searchParams.entries()) // We need to maintain the query params on the navigation, this way next loads the page with the same query params
            }}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>

          {items.map((item) => (
            <Link
              href={{
                pathname: item.href,
                query: Object.fromEntries(searchParams.entries()) // We need to maintain the query params on the navigation, this way next loads the page with the same query params
              }}
              key={item.folder}
              target={item.target}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          ))}

        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation;