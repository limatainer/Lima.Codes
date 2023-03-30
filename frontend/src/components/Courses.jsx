import React from 'react';

export default function Courses() {
  return (
    <section className="py-6 sm:py-12  ">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Formações</h2>
          <p className="font-serif text-sm ">
            Cursos modernos, do básico ao avançado.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col ">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 "
                src="https://source.unsplash.com/200x200/?fashion?1"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline
                 "
              >
                Formação Frontend
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                ReatJS
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col ">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 "
                src="https://source.unsplash.com/200x200/?fashion?2"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline "
              >
                Formação RPA
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Power Automate e Uipath
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col ">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 "
                src="https://source.unsplash.com/200x200/?fashion?3"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline "
              >
                Web Design
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Figma, TailwindCss
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>June 3, 2020</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col ">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 "
                src="https://source.unsplash.com/200x200/?fashion?4"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline "
              >
                Convenire
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Te nulla oportere reprimique his dolorum
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>June 4, 2020</span>
                <span>2.4K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
