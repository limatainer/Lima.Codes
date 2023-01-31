import React from 'react'

export default function Promo() {
  return (
    <div className="p-6 py-12 bg-lime-700 text-neutral-200">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">Desconto
            <span className="sm:hidden">30% Off</span>
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>ebook + Figma Bonus -  Use o codigo:</span>
            <span className="font-bold text-lg">Lima.Codes</span>
          </div>
          <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block ">Reservar Agora</a>
        </div>
      </div>
    </div>
  )
}
