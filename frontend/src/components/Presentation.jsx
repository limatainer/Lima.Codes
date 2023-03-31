import React from 'react';

export default function Presentation() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              A sua plataforma para desenvolver novas habilidades em Programação
              e Design, online.
              <br className="hidden md:block" />
              Entre na{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-red-900" />
                <span className="relative inline-block text-lime-500">
                  Programação
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Conheça o mundo da programação desenvolvendo sua lógica, as nossas
              formações têm as opções para quem precisa de acessbilidade. Venha
              amadurecer ainda mais seus conhecimentos com as tecnologias mais
              quentes do mercado
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Introdução ao Web Design
                </h6>
                <p className="text-sm text-gray-900">
                  Desenvolva do zero ou aprimore suas hablididades com as
                  principais tecnologias atuais no mercado para design de
                  aplicações
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">Frontend 101</h6>
                <p className="text-sm text-gray-900">
                  Aprenda do zero ao avançado as principais linguagens e técnias
                  modernas para o desenvolvimento frontend, desde o HTML raiz as
                  principais frameworks que mais estão em alta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
