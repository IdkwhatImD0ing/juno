import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Notes = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9.406 2.001c.328 0 .593.266.593.593l-.001.829h3.915l.001-.83c0-.328.266-.593.593-.593h.83c.328 0 .593.266.593.593l-.001.83h3.915l.001-.83c0-.328.266-.593.593-.593h.83c.328 0 .593.266.593.593l-.001.83h.599c2.334 0 4.247 1.813 4.368 4.087l.006.229v6.27c0 .695-.569 1.258-1.272 1.258a1.266 1.266 0 0 1-1.271-1.258v-6.27c0-.993-.821-1.802-1.832-1.802h-.598l.001.69a.593.593 0 0 1-.593.593h-.83a.593.593 0 0 1-.593-.593l-.001-.69h-3.915l.001.69a.593.593 0 0 1-.593.593h-.83a.593.593 0 0 1-.593-.593l-.001-.69H9.998l.001.69a.593.593 0 0 1-.593.593h-.83a.593.593 0 0 1-.593-.593l-.001-.69h-.607c-.954 0-1.739.723-1.823 1.638l-.008.164v17.944c0 .993.821 1.802 1.832 1.802h5.831c.702 0 1.272.562 1.272 1.258 0 .694-.569 1.256-1.272 1.256H7.375c-2.412 0-4.374-1.935-4.374-4.316V7.739c0-2.38 1.962-4.315 4.374-4.315l.607-.001.001-.83c0-.328.266-.593.593-.593h.83v.001zm14.638 16.422a3.137 3.137 0 0 1 4.386 0 3.032 3.032 0 0 1 0 4.326l-5.666 5.576a1.047 1.047 0 0 1-.454.261l-4.174 1.139a1.048 1.048 0 0 1-1.017-.27 1.007 1.007 0 0 1-.249-1.008l1.236-4.012c.05-.161.139-.308.26-.426l5.678-5.584zm-.201 3.079-3.832 3.769-.615 1.993 2.1-.572 3.808-3.749-1.462-1.441zm-8.149-.637c.328 0 .593.266.593.593v1.186a.593.593 0 0 1-.593.593H8.576a.593.593 0 0 1-.593-.593v-1.186c0-.328.266-.593.593-.593h7.118zm5.339-5.339c.328 0 .593.266.593.593v1.186a.593.593 0 0 1-.593.593H8.576a.593.593 0 0 1-.593-.593v-1.186c0-.328.266-.593.593-.593h12.457zm0-5.339c.328 0 .593.266.593.593v1.186a.593.593 0 0 1-.593.593H8.576a.593.593 0 0 1-.593-.593V10.78c0-.328.266-.593.593-.593h12.457z" />
    </svg>
  )),
);
Notes.displayName = 'Notes';
Notes['iconName'] = 'notes';
export default Notes;
