"use client";

import { Component } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
    { name: "Accueil", href: "/" },
    { name: "A Propos", href: "/about" },
    { name: "Compétences", href: "/competences" },
    { name: "Mes Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

class NavbarComponent extends Component<{ pathname: string }> {
    render() {
        const { pathname } = this.props;

        return (
            <Disclosure as="nav">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <span className="font-logo text-lg font-logo md:text-3xl text-yellow-400">
                                    <Link href="/">MS</Link>
                                </span>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            aria-current={pathname === item.href ? "page" : undefined}
                                            className={classNames(
                                                pathname === item.href
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "rounded-md px-3 py-2 text-sm font-medium"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={pathname === item.href ? "page" : undefined}
                                className={classNames(
                                    pathname === item.href
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "block rounded-md px-3 py-2 text-base font-medium"
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        );
    }
}

// ✅ COMPOSANT FONCTIONNEL : Injecte `usePathname()` dans la classe
export default function Navbar() {
    const pathname = usePathname();
    return <NavbarComponent pathname={pathname} />;
}
