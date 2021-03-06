/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  PhoneOutgoingIcon,
  XIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'Why Us', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-700 border-b-4 border-red-500">
      {({ open }) => (
        <Fragment>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" passHref>
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/images/logo-01.svg"
                      alt="Workflow"
                    />
                  </Link>
                  <Link href="/" passHref>
                    <span className="flex items-center text-white">
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/images/logo-01.svg"
                        alt="Workflow"
                      />
                      <p className="font-medium text-sm md:text-lg">
                        HOTWATER 24
                      </p>
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href="/">
                        <a
                          className={classNames(
                            item.current
                              ? ' text-white border-b-2 border-red-500'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 text-sm font-medium',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-blue-600 flex space-x-2 px-2 py-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="">Get A Quote</span>
                  <PhoneOutgoingIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
}
