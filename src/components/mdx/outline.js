import React from "react";
import styled from "styled-components";
import { Disclosure, Transition } from "@headlessui/react";
import { GoChevronRight } from "react-icons/go";

const Wrapper = styled.div`
  max-width: 680px;
  width: 100%;
  border-radius: 8px;
  background: var(--color-gray-50);
  padding: 1rem 0.5rem;
  font-size: 1.25rem;
  color: var(--color-text);
  font-family: var(--font-family-handwriting);
`;

const OutlineButton = styled(Disclosure.Button)`
  background: none;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: hsl(219, 41%, 30%);
  font-family: var(--font-family-handwriting);
`;

export default function Outline({ heading = "Article Outline", children }) {
  return (
    <Wrapper>
      <Disclosure>
        {({ open }) => (
          <>
            <OutlineButton>
              <GoChevronRight
                className={`text-xl mr-2 transition-transform ${
                  open ? "transform rotate-90" : ""
                }`}
              />
              {heading}
            </OutlineButton>
            <Transition
              show={open}
              enter="transition duration-300"
              enterFrom="opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pl-4">{children}</div>
            </Transition>
          </>
        )}
      </Disclosure>
    </Wrapper>
  );
}
